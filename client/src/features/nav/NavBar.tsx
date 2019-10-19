import { Nav, Navbar, Icon } from "rsuite";
import EventStore from "../../app/stores/eventStore";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

const NavBar: React.FC = () => {
    const { openCreateForm } = useContext(EventStore);
    return (
        <Navbar appearance="inverse" style={{ marginBottom: 20 }}>
            <Navbar.Body>
                <Nav>
                    <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
                    <Nav.Item>All Events</Nav.Item>
                    <Nav.Item
                        icon={<Icon icon="plus-square" />}
                        onClick={() => openCreateForm()}
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
