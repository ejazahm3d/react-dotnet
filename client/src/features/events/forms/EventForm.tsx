import React from "react";
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Panel,
    DatePicker
} from "rsuite";

const EventForm = () => {
    return (
        <Panel header="Event Form" bordered style={{ marginTop: 10 }}>
            <Form>
                <FormGroup>
                    <FormControl name="title" placeholder="Title" />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        rows={5}
                        name="description"
                        placeholder="Descripton"
                        componentClass="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl name="category" placeholder="Category" />
                </FormGroup>
                <FormGroup>
                    <DatePicker />
                </FormGroup>
                <FormGroup>
                    <FormControl name="city" placeholder="City" />
                </FormGroup>
                <FormGroup>
                    <FormControl name="venue" placeholder="Venue" />
                </FormGroup>
            </Form>
        </Panel>
    );
};

export default EventForm;
