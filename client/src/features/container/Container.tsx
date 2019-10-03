import React from "react";
import { FlexboxGrid } from "rsuite";

const Container: React.FC = ({ children }) => {
    return (
        <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={20}>{children}</FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

export default Container;
