import React, { useContext } from "react";
import { Panel, ButtonGroup, Button } from "rsuite";
import { IEvent } from "../../../app/models/event";
import { observer } from "mobx-react-lite";
import EventStore from "../../../app/stores/eventStore";
interface IProps {
    setEditMode: (editMode: boolean) => void;
    setSelectedEvent: (event: IEvent | null) => void;
    submitting: boolean;
}

const EventDetails: React.FC<IProps> = ({
    setEditMode,
    setSelectedEvent,
    submitting
}) => {
    const { selectedEvent } = useContext(EventStore);
    return (
        <Panel bordered header={selectedEvent ? selectedEvent.title : null}>
            <p>{selectedEvent ? selectedEvent.date : null}</p>
            <ButtonGroup justified>
                <Button
                    loading={submitting}
                    appearance="primary"
                    onClick={() => setEditMode(true)}
                >
                    Edit
                </Button>
                <Button
                    loading={submitting}
                    onClick={() => setSelectedEvent(null)}
                >
                    Cancel
                </Button>
            </ButtonGroup>
        </Panel>
    );
};

export default observer(EventDetails);
