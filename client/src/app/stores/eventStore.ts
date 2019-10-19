import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext } from "react";
import { IEvent } from "../models/event";
import agent from "../api/agent";

configure({ enforceActions: "always" });

class ActivityStore {
    @observable eventRegistry = new Map();
    @observable events: IEvent[] = [];
    @observable selectedEvent: IEvent | null = null;
    @observable loadingInitial = false;
    @observable editMode = false;
    @observable submitting = false;

    @computed get eventsByDate() {
        return Array.from(this.eventRegistry.values()).sort(
            (a, b) => Date.parse(a.date) - Date.parse(b.date)
        );
    }

    @action clearEvent = () => {
        this.selectedEvent = null;
    };
    @action loadEvents = async () => {
        this.loadingInitial = true;
        try {
            const events = await agent.Events.list();
            runInAction("Loading Activities", () => {
                events.forEach(event =>
                    this.eventRegistry.set(event.id, event)
                );
                this.loadingInitial = false;
            });
        } catch (error) {
            runInAction("load activities error", () => {
                this.loadingInitial = false;
            });
            console.log(error);
        }
    };

    @action loadEvent = async (id: string) => {
        let event = this.getEvent(id);
        if (event) {
            this.selectedEvent = event;
        } else {
            this.loadingInitial = true;
            try {
                event = await agent.Events.details(id);
                runInAction("getting single event", () => {
                    this.selectedEvent = event;
                    this.loadingInitial = false;
                });
            } catch (error) {
                console.log(error);
                runInAction("getting single event error", () => {
                    this.loadingInitial = false;
                });
            }
        }
    };

    getEvent = (id: string) => {
        return this.eventRegistry.get(id);
    };
    @action createEvent = async (event: IEvent) => {
        this.submitting = true;
        try {
            await agent.Events.create(event);
            runInAction("create event", () => {
                this.eventRegistry.set(event.id, event);
                this.editMode = false;
                this.submitting = false;
            });
        } catch (error) {
            runInAction("create event error", () => {
                this.submitting = false;
            });
            console.log(error);
        }
    };

    @action editEvent = async (event: IEvent) => {
        this.submitting = true;
        try {
            await agent.Events.update(event);
            runInAction("Edit event", () => {
                this.eventRegistry.set(event.id, event);
                this.selectedEvent = event;
                this.editMode = false;
                this.submitting = false;
            });
        } catch (error) {
            runInAction("edit event error", () => {
                this.submitting = false;
            });
            console.log(error);
        }
    };

    @action deleteEvent = async (id: string) => {
        this.submitting = true;

        try {
            await agent.Events.delete(id);
            runInAction("delete event", () => {
                this.eventRegistry.delete(id);
                this.submitting = false;
            });
        } catch (error) {
            runInAction("delete event error", () => {
                this.submitting = false;
            });
            console.log(error);
        }
    };

    @action openCreateForm = () => {
        this.editMode = true;
        this.selectedEvent = null;
    };

    @action openEditForm = (id: string) => {
        this.selectedEvent = this.eventRegistry.get(id);
        this.editMode = true;
    };

    @action cancelSelectedEvent = () => {
        this.selectedEvent = null;
    };

    @action cancelFormOpen = () => {
        this.editMode = false;
    };
    @action selectEvent = (id: string) => {
        this.selectedEvent = this.eventRegistry.get(id);
        this.editMode = false;
    };
}

export default createContext(new ActivityStore());
