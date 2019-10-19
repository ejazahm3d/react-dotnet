import React, { useEffect, useContext } from "react";
import NavBar from "../../features/nav/NavBar";
import Container from "../../features/container/Container";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import LoadingComponent from "./LoadingComponent";
import EventStore from "../stores/eventStore";
import { observer } from "mobx-react-lite";
import { Route, withRouter, RouteComponentProps } from "react-router";
import HomePage from "../../features/home/HomePage";
import EventForm from "../../features/events/forms/EventForm";
import EventDetails from "../../features/events/details/EventDetails";

const App: React.FC<RouteComponentProps> = ({ location }) => {
    const eventStore = useContext(EventStore);

    useEffect(() => {
        eventStore.loadEvents();
    }, [eventStore]);

    if (eventStore.loadingInitial) return <LoadingComponent />;
    return (
        <>
            <NavBar />
            <Container>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/events" component={EventDashboard} />
                <Route exact path="/events/:id" component={EventDetails} />
                <Route
                    exact
                    key={location.key}
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                />
            </Container>
        </>
    );
};

export default withRouter(observer(App));
