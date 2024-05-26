import { useState } from 'react';
import './collapsibleplans.css';
import Wchat from '../assets/Wchat.png';
import Psend from '../assets/Psend.png';
 

const QuickChat = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const accordionStyle = {
    maxHeight: isCollapsed ? '0px' : '300px', // Adjust the height as needed
    overflowY: 'auto',
    display:'flex',
    flexDirection: 'column-reversee',
    height: '350px',
  };

  

  return (
    <div className='accordion' style={{ marginLeft: '100px', display: 'flex'}}>
      <div className='item' style={{ position: 'fixed', bottom: '-20px', }}>
        <div className='quickChatButton generalFont' onClick={toggleCollapse}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <img src={Wchat} alt="whiteChat" className="whiteChat" style={{marginRight: '5px', marginBottom: '15px', marginRight:'5px'}}/>
            <p className="" style={{ fontSize: '20px', textAlign: 'center', letterSpacing: '2px', margin: '0', marginLeft: '10px' }}>quick chat</p>
          </div>
        </div>
        <div className='savedCardContainer chatScreen' style={accordionStyle}>
            <div style={{display: 'flex' , flexDirection:'column', height:'100%'}}>
                <input type="text" name="name" placeholder='ask your questions' style={{borderRadius: '0', overflow: 'wrap', inlineSize: '300px', maxHeight:'40px'}}/>
                <input type='submit'></input>
                
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default QuickChat;