import {type} from "@testing-library/user-event/dist/type";
import {CHANGE_SEARCH_FIELD} from "./Constants";

export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload : text
})