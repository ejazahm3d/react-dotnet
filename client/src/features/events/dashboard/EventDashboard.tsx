import React from "react";
import { FlexboxGrid } from "rsuite";
import { IEvent } from "../../../app/models/event";
import EventList from "./EventList";
import EventDetails from "../details/EventDetails";
import EventForm from "../forms/EventForm";
interface IProps {
    events: IEvent[];
    selectEvent: (id: String) => void;
    selectedEvent: IEvent | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedEvent: (event: IEvent | null) => void;
    createEvent: (event: IEvent) => void;
    editEvent: (event: IEvent) => void;
    deleteEvent: (id: string) => void;
}

const EventDashboard: React.FC<IProps> = ({
    events,
    selectEvent,
    selectedEvent,
    editMode,
    setEditMode,
    setSelectedEvent,
    createEvent,
    editEvent,
    deleteEvent
}) => {
    return (
        <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item colspan={12}>
                <EventList
                    events={events}
                    selectEvent={selectEvent}
                    deleteEvent={deleteEvent}
                />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
                {selectedEvent && !editMode && (
                    <EventDetails
                        selectedEvent={selectedEvent}
                        setEditMode={setEditMode}
                        setSelectedEvent={setSelectedEvent}
                    />
                )}
                {editMode && (
                    <EventForm
                        key={(selectedEvent && selectedEvent.id) || 0}
                        setEditMode={setEditMode}
                        selectedEvent={selectedEvent}
                        createEvent={createEvent}
                        editEvent={editEvent}
                    />
                )}
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

export default EventDashboard;
