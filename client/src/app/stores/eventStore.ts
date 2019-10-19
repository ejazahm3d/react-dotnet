import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext } from "react";
import { IEvent } from "../models/event";
import agent from "../api/agent";

configure({ enforceActions: "always" });

class ActivityStore {
    @observable eventRegistry = new Map();
    @observable events: IEvent[] = [];
    @observable selectedEvent: IEvent | undefined;
    @observable loadingInitial = false;
    @observable editMode = false;
    @observable submitting = false;

    @computed get eventsByDate() {
        return Array.from(this.eventRegistry.values()).sort(
            (a, b) => Date.parse(a.date) - Date.parse(b.date)
        );
    }
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
        this.selectedEvent = undefined;
    };

    @action openEditForm = (id: string) => {
        this.selectedEvent = this.eventRegistry.get(id);
        this.editMode = true;
    };

    @action cancelSelectedEvent = () => {
        this.selectedEvent = undefined;
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
