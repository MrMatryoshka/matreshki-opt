
export const setSortBy = (name) => ({
    type:'SET_SORT_BY',
     payload: name
 });

 export const setCategory = (catIndex) => ({
     type:'SET_CATEGORY',
     payload: catIndex
 });

export const setCurrentPage = (index) => ({
    type: 'SET_CURRENT_PAGE',
    payload: index
});

export const setSearch = (name) => ({
    type:'SET_SEARCH',
    payload: name
});
