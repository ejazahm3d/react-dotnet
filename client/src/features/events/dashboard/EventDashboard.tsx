import React, { useEffect, useContext } from "react";
import { FlexboxGrid } from "rsuite";
import EventList from "./EventList";

import EventStore from "../../../app/stores/eventStore";

import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const EventDashboard: React.FC = () => {
    const eventStore = useContext(EventStore);
    useEffect(() => {
        eventStore.loadEvents();
    }, [eventStore]);

    if (eventStore.loadingInitial) return <LoadingComponent />;
    return (
        <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item colspan={12}>
                <EventList />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
                <h2>Event Filters</h2>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

export default observer(EventDashboard);
