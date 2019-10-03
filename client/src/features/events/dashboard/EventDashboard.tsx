import React from "react";
import { FlexboxGrid, List } from "rsuite";
import { IEvent } from "../../../app/models/event";
import EventList from "./EventList";
import EventDetails from "../details/EventDetails";
import EventForm from "../forms/EventForm";
interface IProps {
    events: IEvent[];
}

const EventDashboard: React.FC<IProps> = ({ events }) => {
    return (
        <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item colspan={12}>
                <EventList events={events} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
                <EventDetails />
                <EventForm />
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

export default EventDashboard;
