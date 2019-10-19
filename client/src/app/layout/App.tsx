import React, { useEffect, useContext } from "react";
import NavBar from "../../features/nav/NavBar";
import Container from "../../features/container/Container";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import LoadingComponent from "./LoadingComponent";
import EventStore from "../stores/eventStore";
import { observer } from "mobx-react-lite";

const App: React.FC = () => {
    const eventStore = useContext(EventStore);

    useEffect(() => {
        eventStore.loadEvents();
    }, [eventStore]);

    return (
        <>
            <NavBar />
            <Container>
                {eventStore.loadingInitial ? (
                    <LoadingComponent />
                ) : (
                    <EventDashboard />
                )}
            </Container>
        </>
    );
};

export default observer(App);
