import axios from "axios";


export const setLoaded = value => ({
    type: 'SET_LOADED',
    payload: value
})

export const  fetchMatreshki = (sortBy,category) => (dispatch) => {
    dispatch(setLoaded(false))
    // axios.get('https://matreshki-opt.firebaseio.com/matreshki.json')
    //     .then(({data}) => {
    //         dispatch(setMatreshki(category ? data.map((data) => data.category):data));
    //         console.log(data.map((data) => data.category))
    //     })
    //     .catch((e) => console.log('error', e))

    console.log(sortBy,category)
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/matreshki?${category !== null ?`category=${category}`:''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {  dispatch(setMatreshki(data))  })
        .catch((e)=> console.log('error', e) )

}


export const setMatreshki= (items) => ({
    type: 'SET_MATRESHKI',
    payload: items
});


