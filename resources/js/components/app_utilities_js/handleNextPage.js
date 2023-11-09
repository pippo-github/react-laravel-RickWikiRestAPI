async function handleNextPage(event, currentPage, totalPage, setCurrentPage, getApi, setTotalPage, setAllCharacter, setNextPage, setPrevPage){
    event.target.style.pointerEvents = "none"; 
    
    if(currentPage < totalPage){       
        await setCurrentPage( (prev) => prev = prev + 1 );
        let baseUrl = `https://rickandmortyapi.com/api/character?page=${currentPage + 1}`;
        const jsonData = await getApi( baseUrl )
        event.target.style.pointerEvents = "all"; 

        setTotalPage(jsonData.info.pages)
        setAllCharacter(jsonData)
        setNextPage(jsonData.info.next)
        setPrevPage(jsonData.info.prev)
    }
}


export default handleNextPage;