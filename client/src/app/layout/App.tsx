import React, { useState, useEffect } from "react";
import axios from "axios";

import { IEvent } from "../models/event";
import NavBar from "../../features/nav/NavBar";
import Container from "../../features/container/Container";
import EventDashboard from "../../features/events/dashboard/EventDashboard";

const App: React.FC = () => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios
            .get<IEvent[]>("http://localhost:5000/api/events")
            .then(response => {
                setEvents(response.data);
            });
    }, []);

    const handleSelectedEvent = (id: String): void => {
        setEditMode(false);
        setSelectedEvent(events.filter(event => event.id === id)[0]);
    };

    const handleOpenCreateForm = () => {
        setSelectedEvent(null);
        setEditMode(true);
    };

    const handleCreateEvent = (event: IEvent) => {
        setEvents([...events, event]);
        setSelectedEvent(event);
        setEditMode(false);
    };

    const handleEditEvent = (event: IEvent) => {
        setEvents([...events.filter(a => a.id !== event.id), event]);
        setSelectedEvent(event);
        setEditMode(false);
    };

    const handleDeleteEvent = (id: string) => {
        setEvents([...events.filter(a => a.id !== id)]);
    };

    return (
        <>
            <NavBar handleOpenCreateForm={handleOpenCreateForm} />
            <Container>
                <EventDashboard
                    events={events}
                    selectEvent={handleSelectedEvent}
                    selectedEvent={selectedEvent}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    setSelectedEvent={setSelectedEvent}
                    createEvent={handleCreateEvent}
                    editEvent={handleEditEvent}
                    deleteEvent={handleDeleteEvent}
                />
            </Container>
        </>
    );
};

export default App;
