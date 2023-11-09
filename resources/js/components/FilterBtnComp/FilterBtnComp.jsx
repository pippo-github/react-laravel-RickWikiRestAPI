const FilterBtnComp = ({ detailPage, submitFindText, findText, setFindText, currentPage, setAllCharacter, setMoreContent}) =>{

    return (
      <div>
            {
              !detailPage && 
              (
                  <div className='bg-info' style={{marginBottom:"44px"}} >
                    <div>
                        <form onSubmit={ (event) =>{ submitFindText(event, currentPage, findText, setAllCharacter, setMoreContent) } }>
                            <span >
                              <input onChange={ 
                                          (e) =>{ setFindText( e.target.value ) } 
                                      } 
                                      className='form-control' 
                                      style={{ width:"70%", float:"left"}} 
                                      type="text" 
                                      name="inputText" 
                                      id="" 
                              />
                              <button className='btn btn-danger' 
                                      style={{ width:"30%"}} 
                              > 
                                  find into the page 
                              </button>
                            </span>
                        </form>
                    </div>
                </div>
              )
            }

      </div>
    )
}

export default FilterBtnComp;