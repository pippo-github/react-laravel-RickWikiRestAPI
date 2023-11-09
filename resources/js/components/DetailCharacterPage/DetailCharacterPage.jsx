import React from 'react'
import "./characterStyle.css"

const DettailCharacterPage = ({ showCharacterDetail, singleCharatter }) =>{
    return(
        <React.Fragment>
            {(
                showCharacterDetail &&

                <div className='elements bg-info'>
                    <div key={singleCharatter.id} className='element card card-body'>

                        <div className='d-flex card card-title characterName' >{singleCharatter.name}</div>

                        <img src={singleCharatter.image} alt="" />
                        <div className='card card-body' style={{marginTop: "11px"}}>
                            <div><span className="my_labelStyle" >Status: </span>  {singleCharatter.status}</div>
                            <div><span className="my_labelStyle" >Species: </span> {singleCharatter.species}</div>
                            <div><span className="my_labelStyle" >Gender: </span>  {singleCharatter.gender}</div>
                            <div><span className="my_labelStyle" >Origin: </span>  {singleCharatter.origin.name}</div>
                        </div> 

                    </div>

                    <ul  className='element' >
                            { 
                                singleCharatter.episode.map( (e, idx) =>{
                                    return(
                                        <li key={idx}>
                                            <a href={e}>{e.substr(e.indexOf("episode"), e.lenght).replace("/" ," ")}</a>
                                        </li> 
                                    )
                                })
                            }                           
                    </ul>
                </div>            
            )}
        </React.Fragment>
    )
}


export default DettailCharacterPage;