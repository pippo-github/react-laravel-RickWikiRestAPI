const BtnHomeAndMoreComp = ( {moreContent, showCharacterDetail, showAll, loadAllContents, allCharacter, setShowAll } ) =>{
    return(
        <div>
            {
                (moreContent) && 
                <button     
                            className='btn btn-success' 
                            onClick={ () =>{ 
                                             loadAllContents(allCharacter, setShowAll, showAll) } }
                    > 
                                { (showAll) ? "show less contens" : "load other contents" } 
                                </button>
            }
            {
                (showCharacterDetail) &&
                <a style={{marginTop:"11px"}} href="/" className='btn btn-success'> back to home </a>                        
            }
        </div>        
    )
}


export default BtnHomeAndMoreComp;