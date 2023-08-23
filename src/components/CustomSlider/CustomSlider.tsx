import Slider from "react-slick";
import { FC } from "react";
import { CustomSliderType } from "./types";
import { SliderNextArrow } from "./NextArrow";
import { SliderPrevArrow } from "./PrevArrow";

const CustomSliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
};

export const CustomSlider: FC<CustomSliderType> = ({ children, settings }) => {
    if (settings) {
        return <Slider {...settings}>{children}</Slider>;
    }
    return <Slider {...CustomSliderSettings}>{children}</Slider>;
};
