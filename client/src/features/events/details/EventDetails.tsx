import React from "react";
import { Panel, ButtonGroup, Button } from "rsuite";
import { IEvent } from "../../../app/models/event";

interface IProps {
    selectedEvent: IEvent | null;
    setEditMode: (editMode: boolean) => void;
    setSelectedEvent: (event: IEvent | null) => void;
}

const EventDetails: React.FC<IProps> = ({
    selectedEvent,
    setEditMode,
    setSelectedEvent
}) => {
    return (
        <Panel bordered header={selectedEvent ? selectedEvent.title : null}>
            <ButtonGroup justified>
                <Button appearance="primary" onClick={() => setEditMode(true)}>
                    Edit
                </Button>
                <Button onClick={() => setSelectedEvent(null)}>Cancel</Button>
            </ButtonGroup>
        </Panel>
    );
};

export default EventDetails;
