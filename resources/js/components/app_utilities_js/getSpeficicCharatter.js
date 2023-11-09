const getSpeficicCharatter = async (id, setAllCharacter, setSingleCharatter, setShowCharacterDetail, setMoreContent, setShowAll) =>{

    let baseUrl = `https://rickandmortyapi.com/api/character/${id}`;

    const result = await fetch(baseUrl);
    const characterPage = await result.json();

    setAllCharacter([])
    setSingleCharatter(characterPage)
    setShowCharacterDetail(true)
    setMoreContent(false);
    setShowAll(false)
}


export default getSpeficicCharatter;