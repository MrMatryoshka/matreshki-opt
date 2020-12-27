
const initialState ={
    category: null,
    currentPage: null,
    search: null,
    sortBy:{
        type:'popular',
        order:'desc'
    }
}

const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY'){
        return {
            ...state,
            sortBy: action.payload
        }
    }
    if (action.type === 'SET_CATEGORY'){
        return {
            ...state,
            category: action.payload
        }
    }

    if (action.type === 'SET_CURRENT_PAGE'){
        return {
            ...state,
            currentPage: action.payload
        }

    }

    if (action.type === 'SET_SEARCH'){
        return {
            ...state,
            search: action.payload
        }
    }


    return state
};
export default filters
