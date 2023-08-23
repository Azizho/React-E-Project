import { MouseEventHandler, ReactNode } from "react";

export type CustomSliderType = {
    settings?: object;
    children: ReactNode;
};

export type PropsArrowType = {
    onClick?: MouseEventHandler<HTMLDivElement>;
};
