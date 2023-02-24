
export const getNews=()=>{

    const url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b3e12763ea9f45dd8c27b3725230061f`
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :" , error))
}