import React from 'react'

const BtnNxtBckCom = ( {        handleNextPage, 
    detailPage, 
                                totalPage, 
                                currentPage, 
                                nextPage, 
                                prevPage, 
                                // state funztion for handleNextPage
                                setCurrentPage,                            
                                getApi,      
                                setTotalPage, 
                                setAllCharacter, 
                                setNextPage, 
                                setPrevPage  
                            
                            } ) =>{
    return (
        <div>
            <div style={{marginBottom:'11px'}}>
            {
                !detailPage &&  currentPage < totalPage &&
                    (
                        <a href="#" className='btn btn-success' 
                                    style={ 
                                        nextPage !== null ? {display: "inline-block"} : { display: "none" } 
                                    } 
                                    onClick={ (event) => handleNextPage(event, 
                                                            currentPage, 
                                                            totalPage, 
                                                            setCurrentPage,
                                                            getApi,
                                                            setTotalPage, 
                                                            setAllCharacter, 
                                                            setNextPage, 
                                                            setPrevPage) 
                                            }
                        > 
                            next page 
                        </a>
                        
                    )
            }


            {
                !detailPage && currentPage > 1  && 
                (
                    <React.Fragment>
                      
                    <span> { currentPage } of { totalPage } </span>
                        <a href="#" 
                            className='btn btn-success' 
                            style={ prevPage !== null 
                            ? 
                                {display: "inline-block"} 
                            : 
                                { display: "none" } 
                            } 
                            onClick={ 
                                () => prevPage && getApi( prevPage ) && setCurrentPage( () => {
                                                                                        return currentPage-1; 
                                                                                    }) 
                            }
                        >
                            prev page 
                        </a>
                    </React.Fragment>
                )
            }
            </div>
        </div>
    )
}


export default BtnNxtBckCom;