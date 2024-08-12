import { useState } from 'react';
import './popupChat.css';

 
const QuickChat = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [planVisible, setPlanVisible] = useState(false);
  const openPopup = () => {
    setPopupVisible(!popupVisible);
  }
  
  const openPlan = () => {
    setPlanVisible(!planVisible);
  }
  

  return(
    <div>
      <button className='open-btn' onClick={openPopup}><i className='fa fa-comment'>Quick Chat</i></button>
      {popupVisible && (
        <div className='chat-popup' id='chat-form-container'>
          <form className='form-container'>
            <div className='chat-window-head'>
            &#128172;
              <h4><i className='fa fa-comment'>Quick Chat</i></h4>
              <span className='close-btn' onClick={openPopup}>
                &times;
              </span>
            </div>

            <div className='msg-container'>
              <div className='msg'>
                <p>What would you like to ask?</p>
              </div>
            </div>

            <div className='chat-box-container'>
              <div className='chat-box'>
                <input type='text' placeholder='ask a question' name='msg' required></input>
                <button type='submit' className='btn'><i className='fa fa-chevron-circle-right send-btn'>&#10132;</i></button>
              </div>
            </div>
          </form>
        </div>
      )}

      <button className='open-btn-plan' onClick={openPlan}><i className='fa fa-comment'>Plan</i></button>
      {planVisible && (
        <div className='chat-popup-plan' id='chat-form-container'>
          <form className='form-container'>
            <div className='chat-window-head'>
              <h4><i className='fa fa-comment'>Plans</i></h4>
              <span className='close-btn' onClick={openPlan}>
                &times;
              </span>
            </div>

            <div className='msg-container'>
              
            </div>

            
          </form>
        </div>
      )}



    </div>
    
  );
}

export default QuickChat;