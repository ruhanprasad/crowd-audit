import { FETCH_PROJECTS } from '../actions/types';

const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PROJECTS:
            return action.payload;
        default:
            return state;
    }
};

export default projectsReducer;