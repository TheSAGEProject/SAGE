import React, {useEffect, useRef} from 'react'
import '../global.css';
import './popup.css'
import {X} from 'lucide-react'





const PopUp = ({onClose}) => {
  const popupRef = useRef();
  const closePopup = (e) => {
    if(popupRef.current === e.target){
      onClose();
    }
  }


  return (
    <div style={{backdropFilter: 'blur(4px)', background: 'rgba(0, 0, 0, 0.3)', opacity: '30', position: 'fixed', inset: '0', width:'100%', height:'100%'}}>
        <div style={{marginTop: '10', display: 'flex', flexDirection: 'column', gap: '5', text: 'white'}}>
            <button onClick={onClose} style={{placeSelf: 'end'}}><X size={30}/></button>
            <div style={{background: '#BF81EF', borderRadius: '15px', padding: '70px', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '5', margin:'200px'}}>
            <form>
              <label style={{fontSize: '30px'}} className='generalFont'>
                Plan Name:
                <input type="text" name="name" placeholder='Enter Plan Name' />
              </label>
              <input type="submit" value="save" />
            </form>
              
            </div>
        </div>
    </div>
  )
}

export default PopUp
