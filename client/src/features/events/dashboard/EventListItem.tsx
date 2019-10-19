import React from "react";
import { List, FlexboxGrid, Button, Tag } from "rsuite";
import { Link } from "react-router-dom";
import { IEvent } from "../../../app/models/event";

const EventListItem: React.FC<{ event: IEvent }> = ({ event }) => {
    return (
        <List.Item key={event.id} style={{ paddingTop: 10 }}>
            <h5>{event.title}</h5>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <p>
                {event.city}, {event.venue}
            </p>

            <FlexboxGrid justify="space-between" style={{ marginTop: 10 }}>
                <FlexboxGrid.Item>
                    <Tag color="green">{event.category}</Tag>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                    <Button
                        appearance="primary"
                        componentClass={Link}
                        to={`/events/${event.id}`}
                    >
                        Details
                    </Button>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </List.Item>
    );
};

export default EventListItem;
