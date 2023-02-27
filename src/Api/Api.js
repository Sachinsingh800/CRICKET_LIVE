const  API_KEY="02bf54a5-e862-486b-a426-57db41004cef"

export const getMatches=()=>{

    const url=`https://api.cricapi.com/v1/currentMatches?apikey=02bf54a5-e862-486b-a426-57db41004cef&offset=0?apikey=${ API_KEY}`
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :" , error))
}

