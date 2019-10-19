import React from "react";
import { Placeholder } from "rsuite";
import { Loader } from "rsuite";

const LoadingComponent: React.FC = () => {
    const { Paragraph } = Placeholder;
    return (
        <Paragraph rows={10}>
            <Loader backdrop size="lg" center vertical content="Loading..." />
        </Paragraph>
    );
};

export default LoadingComponent;
