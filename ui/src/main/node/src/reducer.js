const init = {
    loadingMarkers: [],
    events: {
        rows: 0,
        page: 1,
        pages: 1,
        data: []
    }
};

const EVENTS_LIST_UPDATED = "EVENTS_LIST_UPDATED";
const ADD_LOADING_MARKER = "ADD_LOADING_MARKER";
const REMOVE_LOADING_MARKER = "REMOVE_LOADING_MARKER";

const reducer = (state = init, action) => {
    switch (action.type) {
        case EVENTS_LIST_UPDATED: {
            return {
                ...state,
                events: action.payload
            }
        }
        case ADD_LOADING_MARKER: {
            return {
                ...state,
                loadingMarkers: state.loadingMarkers.concat([action.payload])
            }
        }
        case REMOVE_LOADING_MARKER: {
            return {
                ...state,
                loadingMarkers: state.loadingMarkers.filter((marker) => marker !== action.payload)
            }
        }
        default: {
            return state;
        }
    }
};

export {
    ADD_LOADING_MARKER,
    REMOVE_LOADING_MARKER,
    EVENTS_LIST_UPDATED
};
export default reducer;
