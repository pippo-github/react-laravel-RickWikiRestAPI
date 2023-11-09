import React, { useEffect, useLayoutEffect, useState } from 'react';
import FilterBtnComp from '../FilterBtnComp/FilterBtnComp'
import BtnNxtBckCom from '../BtnNxtBckCom/BtnNxtBckCom';
import RenderCharattersComp from '../ReanderCharactersComp/RenderCharattersComp'
import DetailCharacterPage from '../DetailCharacterPage/DetailCharacterPage'
import BtnHomeAndMoreComp from '../BtnHomeAndMore/BtnHomeAndMode'
import handleNextPage  from '../app_utilities_js/handleNextPage'
import loadAllContents  from '../app_utilities_js/loadAllContents'
import getSpeficicCharatter  from '../app_utilities_js/getSpeficicCharatter'
import getApi from '../app_utilities_js/getAPI'
import submitFindText from '../app_utilities_js/submitFindText'
import "../AppBody.css"


const AppBody = () => {

    const [allCharacter, setAllCharacter] = useState([])
    const [singleCharatter, setSingleCharatter] = useState([])
    const [showAll, setShowAll] = useState(false)
    const [showCharacterDetail, setShowCharacterDetail] = useState(false)

    const [nextPage, setNextPage] = useState("")
    const [prevPage, setPrevPage] = useState("")
    const [initialPage, setInitialPage] = useState(1) 
    const [detailPage, setDetailPage] = useState(false) 
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [findText, setFindText] = useState("")
    const [findNotFoud, setFindNotFoud] = useState(false)
    const [moreContent, setMoreContent] = useState(false)
    
    useEffect( async () =>{
        const baseUrl = `https://rickandmortyapi.com/api/character?page=${currentPage}`;
        const jsonData = await getApi(baseUrl);
        
        setTotalPage(jsonData.info.pages)
        setAllCharacter(jsonData)
        setNextPage(jsonData.info.next)
        setPrevPage(jsonData.info.prev)
        setMoreContent(true);

    },[currentPage])


    const loadCharattersPage = (name, id) => {
        setSingleCharatter([])
        getSpeficicCharatter(id, setAllCharacter, setSingleCharatter, setShowCharacterDetail, setMoreContent, setShowAll);  
        setDetailPage(true)      
    } 
    

    return(
        <div style={{minHeight:"65vh"}}>            
                <FilterBtnComp      
                                    detailPage={detailPage}
                                    submitFindText={ submitFindText } 
                                    setFindText={setFindText }
                                    currentPage={currentPage}
                                    setAllCharacter={ setAllCharacter}
                                    setMoreContent={setMoreContent}
                                    findText={findText}
                
                /> 

                { 
                    <BtnNxtBckCom handleNextPage={handleNextPage} 
                                    setCurrentPage={setCurrentPage} 
                                    getApi={getApi}
                                    setTotalPage={setTotalPage}
                                    setAllCharacter={setAllCharacter}
                                    setNextPage={setNextPage}
                                    setPrevPage={setPrevPage}
                                    detailPage={detailPage} 
                                    totalPage={totalPage}
                                    currentPage={currentPage}
                                    nextPage={nextPage}
                                    prevPage={prevPage}
                                    
                    />                                 
                }


                <div className="elements">  

                    <RenderCharattersComp   showCharacterDetail={showCharacterDetail} 
                                            allCharacter={allCharacter} 
                                            showAll={showAll} 
                                            loadCharattersPage={loadCharattersPage} />
             
                { <DetailCharacterPage showCharacterDetail={showCharacterDetail} singleCharatter={singleCharatter }/> }

                </div>

                <BtnHomeAndMoreComp 
                                        moreContent={moreContent} 
                                        showCharacterDetail={showCharacterDetail} 
                                        showAll={showAll} 
                                        loadAllContents={loadAllContents}
                                        setShowAll={setShowAll}
                />
                    
        </div>
    )

}


export default AppBody;