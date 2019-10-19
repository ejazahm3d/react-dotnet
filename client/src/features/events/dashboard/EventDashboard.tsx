import React, { useContext } from "react";
import { FlexboxGrid } from "rsuite";
import EventList from "./EventList";
import EventDetails from "../details/EventDetails";
import EventForm from "../forms/EventForm";
import { observer } from "mobx-react-lite";
import EventStore from "../../../app/stores/eventStore";

const EventDashboard: React.FC = () => {
    const { editMode, selectedEvent } = useContext(EventStore);
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
