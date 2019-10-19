import React, { useContext, useEffect } from "react";
import { Panel, ButtonGroup, Button } from "rsuite";
import { observer } from "mobx-react-lite";
import EventStore from "../../../app/stores/eventStore";
import { RouteComponentProps } from "react-router";
import LoadingComponent from "../../../app/layout/LoadingComponent";

interface DetailParams {
    id: string;
}

const EventDetails: React.FC<RouteComponentProps<DetailParams>> = ({
    match,
    history
}) => {
    const {
        selectedEvent,
        openEditForm,
        submitting,
        cancelSelectedEvent,
        loadEvent,
        loadingInitial
    } = useContext(EventStore);

    useEffect(() => {
        loadEvent(match.params.id);
    }, [loadEvent]);

    if (loadingInitial || !selectedEvent) return <LoadingComponent />;

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
                    onClick={() => history.push("/events")}
                >
                    Cancel
                </Button>
            </ButtonGroup>
        </Panel>
    );
};

export default observer(EventDetails);
