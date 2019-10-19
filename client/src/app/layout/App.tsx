import React from "react";
import NavBar from "../../features/nav/NavBar";
import Container from "../../features/container/Container";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import { observer } from "mobx-react-lite";
import { Route, withRouter, RouteComponentProps } from "react-router";
import HomePage from "../../features/home/HomePage";
import EventForm from "../../features/events/forms/EventForm";
import EventDetails from "../../features/events/details/EventDetails";

const App: React.FC<RouteComponentProps> = ({ location }) => {
    return (
        <>
            <Route exact path="/" component={HomePage} />
            <Route
                path="/(.+)"
                render={() => (
                    <>
                        <NavBar />
                        <Container>
                            <Route
                                exact
                                path="/events"
                                component={EventDashboard}
                            />
                            <Route
                                exact
                                path="/events/:id"
                                component={EventDetails}
                            />
                            <Route
                                exact
                                key={location.key}
                                path={["/createEvent", "/manage/:id"]}
                                component={EventForm}
                            />
                        </Container>
                    </>
                )}
            />
        </>
    );
};

export default withRouter(observer(App));
