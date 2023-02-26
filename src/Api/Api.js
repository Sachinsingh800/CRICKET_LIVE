const  API_KEY="e5cfbfef-c1a6-4f15-89d3-d0d8984264b6"

export const getMatches=()=>{

    const url=`https://api.cricapi.com/v1/currentMatches?apikey=e5cfbfef-c1a6-4f15-89d3-d0d8984264b6&offset=0?apikey=${ API_KEY}`
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :" , error))
}