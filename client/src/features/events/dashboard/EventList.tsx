import React, { useContext } from "react";
import { List } from "rsuite";
import { observer } from "mobx-react-lite";
import EventStore from "../../../app/stores/eventStore";
import EventListItem from "./EventListItem";

const EventList: React.FC = () => {
    const { eventsByDate } = useContext(EventStore);
    return (
        <>
            {eventsByDate.map(([group, events]) => (
                <div key={group}>
                    <h5 style={{ marginBottom: 10 }}>{group}</h5>
                    <List bordered>
                        {events.map(event => (
                            <EventListItem key={event.id} event={event} />
                        ))}
                    </List>
                </div>
            ))}
        </>
    );
};

export default observer(EventList);
