import React, { useState, useContext } from "react";
import {
    Form,
    FormGroup,
    FormControl,
    Panel,
    DatePicker,
    ButtonGroup,
    Button
} from "rsuite";
import { IEvent } from "../../../app/models/event";
import EventStore from "../../../app/stores/eventStore";
import { v4 as uuid } from "uuid";
import { observer } from "mobx-react-lite";

interface IProps {
    selectedEvent: IEvent | undefined;
}

const EventForm: React.FC<IProps> = ({ selectedEvent }) => {
    const { createEvent, editEvent, submitting, cancelFormOpen } = useContext(
        EventStore
    );
    const initialzeFrom = (): IEvent => {
        if (selectedEvent) return selectedEvent;
        else
            return {
                id: "",
                title: "",
                category: "",
                description: "",
                date: "",
                city: "",
                venue: ""
            };
    };

    const [event, setEvent] = useState<IEvent>(initialzeFrom);

    const handleInputChange = (newText: string, e: any) => {
        console.log(newText, e.target.name);
        setEvent({ ...event, [e.target.name]: newText });
    };

    const handleDateChange = (value: Date) => {
        setEvent({ ...event, date: value.toISOString() });
    };

    const handleSubmit = () => {
        if (event.id.length === 0) {
            let newEvent = {
                ...event,
                id: uuid()
            };
            createEvent(newEvent);
        } else {
            editEvent(event);
        }
    };

    return (
        <Panel header="Event Form" bordered style={{ marginTop: 10 }}>
            <Form>
                <FormGroup>
                    <FormControl
                        value={event.title}
                        name="title"
                        placeholder="Title"
                        onChange={(value, e) => handleInputChange(value, e)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        value={event.description}
                        rows={5}
                        name="description"
                        placeholder="Descripton"
                        componentClass="textarea"
                        onChange={(value, e) => handleInputChange(value, e)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        value={event.category}
                        name="category"
                        placeholder="Category"
                        onChange={(value, e) => handleInputChange(value, e)}
                    />
                </FormGroup>
                <FormGroup>
                    <DatePicker
                        defaultValue={event.date as any}
                        onChange={(value, e) => handleDateChange(value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        value={event.city}
                        name="city"
                        placeholder="City"
                        onChange={(value, e) => handleInputChange(value, e)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        value={event.venue}
                        name="venue"
                        placeholder="Venue"
                        onChange={(value, e) => handleInputChange(value, e)}
                    />
                </FormGroup>

                <ButtonGroup justified>
                    <Button
                        loading={submitting}
                        appearance="primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <Button
                        loading={submitting}
                        onClick={() => cancelFormOpen()}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </Panel>
    );
};

export default observer(EventForm);
