import React, { useState, useEffect } from "react";
import axios from "axios";
import "rsuite/dist/styles/rsuite-default.css";
import { Nav, Navbar, Dropdown, Icon, List, FlexboxGrid } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
interface Values {
    id: number;
    name: string;
}

const App: React.FC = () => {
    const [values, setValues] = useState(Array<Values>());
    useEffect(() => {
        axios.get("http://localhost:5000/values").then(response => {
            const valuesFromRes: Values[] = response.data;
            setValues(valuesFromRes);
        });
    }, []);

    return (
        <div>
            <Navbar appearance="inverse">
                <Navbar.Body>
                    <Nav>
                        <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
                        <Nav.Item>News</Nav.Item>
                        <Nav.Item>Products</Nav.Item>
                        <Dropdown title="About">
                            <Dropdown.Item>Company</Dropdown.Item>
                            <Dropdown.Item>Team</Dropdown.Item>
                            <Dropdown.Item>Contact</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>

            <FlexboxGrid justify="center" style={{ marginTop: 20 }}>
                <FlexboxGridItem colspan={20}>
                    <List>
                        {values.map(value => (
                            <List.Item
                                key={value.id}
                                style={{ paddingTop: 10 }}
                            >
                                {value.name}
                            </List.Item>
                        ))}
                    </List>
                </FlexboxGridItem>
            </FlexboxGrid>
        </div>
    );
};

export default App;
