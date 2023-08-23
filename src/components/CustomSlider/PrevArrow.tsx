import { FC } from "react";
import { PropsArrowType } from "./types";
import { styled } from "styled-components";

export const SliderPrevArrow: FC<PropsArrowType> = ({ onClick }) => {
    return (
        <SliderPrevArrowStyle onClick={onClick}>
            <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_9_53)">
                    <circle cx="19" cy="17" r="15" fill="white" />
                </g>
                <path
                    d="M15.6606 17L20.1289 12.5351C20.4594 12.2047 20.4594 11.6703 20.1289 11.3433C19.7985 11.0129 19.2641 11.0164 18.9336 11.3433L13.8711 16.4023C13.5512 16.7222 13.5442 17.2355 13.8465 17.566L18.9301 22.6601C19.0953 22.8254 19.3133 22.9062 19.5278 22.9062C19.7422 22.9062 19.9602 22.8254 20.1254 22.6601C20.4559 22.3297 20.4559 21.7953 20.1254 21.4683L15.6606 17Z"
                    fill="black"
                    stroke="black"
                />
                <defs>
                    <filter
                        id="filter0_d_9_53"
                        x="0"
                        y="0"
                        width="38"
                        height="38"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_9_53"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_9_53"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </SliderPrevArrowStyle>
    );
};

const SliderPrevArrowStyle = styled.div`
    position: absolute;
    top: 50%;
    left: 19px;
    z-index: 100;
    transform: translate(0, -50%);
    cursor: pointer;
`;
