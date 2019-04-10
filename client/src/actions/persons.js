export const personFetchDataSuccess = persons => {
    return {
    type: "PERSONS_FETCH_DATA_SUCCESS", 
    persons
    }
}


export const personFetchData = url =>  {
    return (dispatch) => {
        fetch(url)
        .then(res=> {
            if (res.ok) {
            return res
        } 
            throw new Error(res.statusText)
            
        } )      
        .then(res=>res.json())
        .then(persons=>dispatch(personFetchDataSuccess(persons)))
    }
}