    const submitFindText = async (e, currentPage, findText, setAllCharacter, setMoreContent) =>{

        e.preventDefault();
        let baseUrl = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

        const result = await fetch(baseUrl)
        const dataJson = await result.json()

        let charachtersVector = dataJson.results

        const retVet = charachtersVector.filter( (character) => character.name.toLowerCase().indexOf(findText.toLocaleLowerCase()) !== -1  )

        setAllCharacter({results: retVet});

        (retVet.length > 11) ? setMoreContent(true) : setMoreContent(false);
        // (retVet.length > 0) ? setFindNotFoud(true) : setFindNotFoud(false);
        if(retVet.length === 0) {
                setMoreContent(false);
        }
    }    
export default submitFindText;