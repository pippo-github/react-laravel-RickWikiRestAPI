import React from 'react'
const RenderCharacter = ( {showCharacterDetail, allCharacter, showAll, loadCharattersPage }) =>{
    return (
        <React.Fragment>
            {(
                !showCharacterDetail &&
                allCharacter.results && allCharacter.results.map( (e, idx) =>{
                    const {id, name, status, species, image, gender} = e
                    return(

                    (!showAll) 
                    ?     
                    (idx <= 11) &&
                        <div  key={id} >
                            <div className='element' onClick={ ()=> loadCharattersPage(name, id) }>
                                    <div className="titleImg">
                                    { name }
                                    </div>
                                    <img src={image} alt="img missed" title={ "go to the " + name + " page" } />
                            </div>
                        </div>
                    :
                    <div  key={id} >
                        <div className='element' onClick={ ()=> loadCharattersPage(name, id) }>

                        <div className="titleImg">
                            { name }
                        </div>
                            <img src={image} alt="" />
                        </div>
                    </div>
                    )                    
                })
        )}
        </React.Fragment>
    )
}

export default RenderCharacter;