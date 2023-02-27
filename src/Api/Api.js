const  API_KEY="d0b88f9e-e812-4e89-a36f-b07bfb63f530"

export const getMatches=()=>{

    const url=`https://api.cricapi.com/v1/currentMatches?apikey=d0b88f9e-e812-4e89-a36f-b07bfb63f530&offset=0?apikey=${ API_KEY}`
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :" , error))
}

export const getMatchInfo=()=>{

    const url=`https://api.cricapi.com/v1/players_info?apikey=d0b88f9e-e812-4e89-a36f-b07bfb63f530&id=8d553533-7155-4744-b51a-80b53c19b353`
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :" , error))
}