const  API_KEY="4720d6cd-e8d3-4ece-97bd-ee1a1fb269aa"

export const getMatches=()=>{

    const url=`https://api.cricapi.com/v1/currentMatches?apikey=4720d6cd-e8d3-4ece-97bd-ee1a1fb269aa&offset=0?apikey=${ API_KEY}`
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :" , error))
}

