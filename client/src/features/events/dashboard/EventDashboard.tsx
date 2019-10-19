import React from "react";
import { FlexboxGrid } from "rsuite";
import EventList from "./EventList";

import { observer } from "mobx-react-lite";

const EventDashboard: React.FC = () => {
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
