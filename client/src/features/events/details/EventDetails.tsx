import React, { useContext, useEffect } from "react";
import { Panel, Button, FlexboxGrid } from "rsuite";
import { observer } from "mobx-react-lite";
import EventStore from "../../../app/stores/eventStore";
import { RouteComponentProps } from "react-router";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";

interface DetailParams {
    id: string;
}

const EventDetails: React.FC<RouteComponentProps<DetailParams>> = ({
    match,
    history
}) => {
    const { selectedEvent, submitting, loadEvent, loadingInitial } = useContext(
        EventStore
    );

    useEffect(() => {
        loadEvent(match.params.id);
    }, [loadEvent, match.params.id]);

    if (loadingInitial || !selectedEvent) return <LoadingComponent />;

    return (
        <Panel bordered header={selectedEvent ? selectedEvent.title : null}>
            <p>{selectedEvent ? selectedEvent.date : null}</p>
            <FlexboxGrid>
                <Button
                    block
                    loading={submitting}
                    appearance="primary"
                    componentClass={Link}
                    to={`/manage/${selectedEvent.id}`}
                >
                    Edit
                </Button>

                <Button
                    block
                    loading={submitting}
                    onClick={() => history.push("/events")}
                >
                    Cancel
                </Button>
            </FlexboxGrid>
        </Panel>
    );
};

export default observer(EventDetails);
