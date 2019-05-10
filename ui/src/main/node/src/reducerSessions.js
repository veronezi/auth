const init = {
    events: {
        rows: 0,
        page: 1,
        pages: 1,
        data: []
    }
};

const EVENTS_LIST_UPDATED = "EVENTS_LIST_UPDATED";

const reducer = (state = init, action) => {
    switch (action.type) {
        case EVENTS_LIST_UPDATED: {
            return {
                ...state,
                events: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export {
    EVENTS_LIST_UPDATED
};
export default reducer;
