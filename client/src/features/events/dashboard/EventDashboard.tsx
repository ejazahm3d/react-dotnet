import React, { useContext } from "react";
import { FlexboxGrid } from "rsuite";
import { IEvent } from "../../../app/models/event";
import EventList from "./EventList";
import EventDetails from "../details/EventDetails";
import EventForm from "../forms/EventForm";
import { observer } from "mobx-react-lite";
import EventStore from "../../../app/stores/eventStore";
interface IProps {
    events: IEvent[];
    selectEvent: (id: String) => void;
    setEditMode: (editMode: boolean) => void;
    setSelectedEvent: (event: IEvent | null) => void;
    createEvent: (event: IEvent) => void;
    editEvent: (event: IEvent) => void;
    deleteEvent: (id: string) => void;
    submitting: boolean;
}

const EventDashboard: React.FC<IProps> = ({
    events,
    selectEvent,

    setEditMode,
    setSelectedEvent,
    createEvent,
    editEvent,
    deleteEvent,
    submitting
}) => {
    const { editMode, selectedEvent } = useContext(EventStore);
    return (
        <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item colspan={12}>
                <EventList deleteEvent={deleteEvent} submitting={submitting} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
                {selectedEvent && !editMode && (
                    <EventDetails
                        setEditMode={setEditMode}
                        setSelectedEvent={setSelectedEvent}
                        submitting={submitting}
                    />
                )}
                {editMode && (
                    <EventForm
                        key={(selectedEvent && selectedEvent.id) || 0}
                        setEditMode={setEditMode}
                        selectedEvent={selectedEvent}
                        createEvent={createEvent}
                        editEvent={editEvent}
                        submitting={submitting}
                    />
                )}
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

export default observer(EventDashboard);
