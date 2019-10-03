import { Nav, Navbar, Icon } from "rsuite";

import React from "react";

const NavBar = () => {
    return (
        <Navbar appearance="inverse" style={{ marginBottom: 20 }}>
            <Navbar.Body>
                <Nav>
                    <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
                    <Nav.Item>All Events</Nav.Item>
                    <Nav.Item icon={<Icon icon="plus-square" />}>
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

export default NavBar;
