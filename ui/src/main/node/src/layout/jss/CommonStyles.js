const expandedLeftSize = "300px";
const collapsedLeftSize = "60px";
const padding = "10px";
const headerSize = "70px";
const darkGrey = "#eeeeee";
const grey = "#fafafa";
const lightGrey = "#ffffff";
const highlighed = "#dce8ec";
const transitionDuration = 300;
const slideStyles = {
    "&.slide-enter": {
        transition: `transform ${transitionDuration}ms ease-in-out`,
        transform: "translate(100%)",
    },
    "&.slide-enter-active": {
        transform: "translate(0)",
    },
    "&.slide-exit-active": {
        transform: "translate(100%)",
    },
    "&.slide-exit": {
        transition: `transform ${transitionDuration}ms ease-in-out`,
        transform: "translate(-100%)",
    },
};

export {
    expandedLeftSize,
    collapsedLeftSize,
    padding,
    headerSize,
    darkGrey,
    grey,
    lightGrey,
    highlighed,
    transitionDuration,
    slideStyles
}