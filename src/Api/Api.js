const  API_KEY="1c2bb373-0fb7-4d92-b019-18a6b2c762fa"

export const getMatches=()=>{

    const url=`https://api.cricapi.com/v1/currentMatches?apikey=1c2bb373-0fb7-4d92-b019-18a6b2c762fa&offset=0?apikey=${ API_KEY}`
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :" , error))
}