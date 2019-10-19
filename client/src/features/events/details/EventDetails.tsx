import React, { useContext } from "react";
import { Panel, ButtonGroup, Button } from "rsuite";
import { observer } from "mobx-react-lite";
import EventStore from "../../../app/stores/eventStore";

const EventDetails: React.FC = () => {
    const {
        selectedEvent,
        openEditForm,
        submitting,
        cancelSelectedEvent
    } = useContext(EventStore);
    return (
        <Panel bordered header={selectedEvent ? selectedEvent.title : null}>
            <p>{selectedEvent ? selectedEvent.date : null}</p>
            <ButtonGroup justified>
                <Button
                    loading={submitting}
                    appearance="primary"
                    onClick={() => openEditForm(selectedEvent!.id)}
                >
                    Edit
                </Button>
                <Button
                    loading={submitting}
                    onClick={() => cancelSelectedEvent()}
                >
                    Cancel
                </Button>
            </ButtonGroup>
        </Panel>
    );
};

export default observer(EventDetails);
