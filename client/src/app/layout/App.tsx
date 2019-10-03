import React, { useState, useEffect } from "react";
import axios from "axios";

import { IEvent } from "../models/event";
import NavBar from "../../features/nav/NavBar";
import Container from "../../features/container/Container";
import EventDashboard from "../../features/events/dashboard/EventDashboard";

const App: React.FC = () => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
    useEffect(() => {
        axios
            .get<IEvent[]>("http://localhost:5000/api/events")
            .then(response => {
                setEvents(response.data);
            });
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <EventDashboard events={events} />
            </Container>
        </>
    );
};

export default App;
