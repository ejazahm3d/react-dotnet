import React, { useState, useEffect, useContext } from "react";

import { IEvent } from "../models/event";
import NavBar from "../../features/nav/NavBar";
import Container from "../../features/container/Container";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import EventStore from "../stores/eventStore";
import { observer } from "mobx-react-lite";

const App: React.FC = () => {
    const eventStore = useContext(EventStore);

    const [events, setEvents] = useState<IEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
    const [editMode, setEditMode] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        eventStore.loadEvents();
    }, [eventStore]);

    const handleSelectedEvent = (id: String): void => {
        setEditMode(false);
        setSelectedEvent(events.filter(event => event.id === id)[0]);
    };

    const handleOpenCreateForm = () => {
        setSelectedEvent(null);
        setEditMode(true);
    };

    const handleCreateEvent = async (event: IEvent) => {
        setSubmitting(true);
        agent.Events.create(event)
            .then(() => {
                setEvents([...events, event]);

                setSelectedEvent(event);
                setEditMode(false);
            })
            .then(() => setSubmitting(false));
    };

    const handleEditEvent = (event: IEvent) => {
        setSubmitting(true);
        agent.Events.update(event)
            .then(() => {
                setEvents([...events.filter(a => a.id !== event.id), event]);
                setSelectedEvent(event);
                setEditMode(false);
            })
            .then(() => setSubmitting(false));
    };

    const handleDeleteEvent = (id: string) => {
        setSubmitting(true);
        agent.Events.delete(id)
            .then(() => {
                setEvents([...events.filter(a => a.id !== id)]);
            })
            .then(() => setSubmitting(false));
    };

    return (
        <>
            <NavBar handleOpenCreateForm={handleOpenCreateForm} />
            <Container>
                {eventStore.loadingInitial ? (
                    <LoadingComponent />
                ) : (
                    <EventDashboard
                        submitting={submitting}
                        events={eventStore.events}
                        selectEvent={handleSelectedEvent}
                        setEditMode={setEditMode}
                        setSelectedEvent={setSelectedEvent}
                        createEvent={handleCreateEvent}
                        editEvent={handleEditEvent}
                        deleteEvent={handleDeleteEvent}
                    />
                )}
            </Container>
        </>
    );
};

export default observer(App);
