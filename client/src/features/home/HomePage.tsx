import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Container>
            <h1>Home page</h1>
            <h3>
                Go to <Link to="/events">Events</Link>
            </h3>
        </Container>
    );
};

export default HomePage;
