import { Nav, Navbar, Icon } from "rsuite";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <Navbar appearance="inverse" style={{ marginBottom: 20 }}>
            <Navbar.Body>
                <Nav>
                    <Nav.Item
                        icon={<Icon icon="home" />}
                        componentClass={NavLink}
                        to="/"
                    >
                        Home
                    </Nav.Item>
                    <Nav.Item as={Link} componentClass={NavLink} to="/events">
                        All Events
                    </Nav.Item>
                    <Nav.Item
                        icon={<Icon icon="plus-square" />}
                        componentClass={NavLink}
                        to="/createEvent"
                    >
                        Create Event
                    </Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

export default observer(NavBar);
