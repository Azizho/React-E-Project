import { Stack, TextField } from "@mui/material";
import { styled } from "styled-components";

export const BorderCustomStack = styled(Stack)`
    padding-top: 27px;
    padding-bottom: 27px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    margin-bottom: 6px;
`;

export const SearchTextField = styled(TextField)`
    padding: 17px;
    max-width: 428px;
    width: 100%;
`;
