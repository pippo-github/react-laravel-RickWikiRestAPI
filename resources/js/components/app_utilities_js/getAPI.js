async function  getApi(url){
    const result = await fetch(url);
    const jsonData = await result.json();
    return jsonData;
}


export default getApi;