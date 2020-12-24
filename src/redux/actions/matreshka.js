import axios from "axios";


export const setLoaded = value => ({
    type: 'SET_LOADED',
    payload: value
})

export const  fetchMatreshki = (sortBy,category,currentPage) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/matreshki?
    ${category !== null ?`category=${category}`:''}
    &_sort=${sortBy.type}
    &_order=${sortBy.order}
    &_page=${currentPage}
    &_limit=10
    `)
        .then(({data}) => {  dispatch(setMatreshki(data))  })
        .catch((e)=> console.log('error', e) )

}


export const setMatreshki = (items) => ({
    type: 'SET_MATRESHKI',
    payload: items
});



