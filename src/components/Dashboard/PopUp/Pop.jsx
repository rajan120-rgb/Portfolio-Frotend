import React, { useContext } from 'react'
import './Pop.css'
import { LoginContext } from '../../../Context/Context'

const Pop = ({handleSubmit , des , update}) => {
    const { popUp , setPopUp} = useContext(LoginContext)


  return (
    <>
      {popUp && (
          <div className="pop-up">
            <div className="pop-msg">
              <h2>{update}</h2>
              <p>{des}</p>
              <div className="popup-btn">
                <button className="yes" onClick={(e)=>handleSubmit(e)}>Yes</button>
                <button className="no" onClick={()=> setPopUp(false)}>No</button>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Pop
