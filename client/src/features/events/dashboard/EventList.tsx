import React, { useContext } from "react";
import { List, Tag, Button, FlexboxGrid } from "rsuite";
import { observer } from "mobx-react-lite";
import EventStore from "../../../app/stores/eventStore";
import { NavLink, Link } from "react-router-dom";

const EventList: React.FC = () => {
    const { eventsByDate, selectEvent, deleteEvent, submitting } = useContext(
        EventStore
    );
    return (
        <List bordered>
            {eventsByDate.map(event => (
                <List.Item key={event.id} style={{ paddingTop: 10 }}>
                    <h5>{event.title}</h5>
                    <p>{event.date}</p>
                    <p>{event.description}</p>
                    <p>
                        {event.city}, {event.venue}
                    </p>

                    <FlexboxGrid
                        justify="space-between"
                        style={{ marginTop: 10 }}
                    >
                        <FlexboxGrid.Item>
                            <Tag color="green">{event.category}</Tag>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item>
                            <Button
                                appearance="primary"
                                onClick={() => selectEvent(event.id)}
                                componentClass={Link}
                                to={`/events/${event.id}`}
                            >
                                Details
                            </Button>
                            <Button
                                loading={submitting}
                                style={{ marginLeft: 5 }}
                                color="red"
                                onClick={() => deleteEvent(event.id)}
                            >
                                Delete
                            </Button>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </List.Item>
            ))}
        </List>
    );
};

export default observer(EventList);
