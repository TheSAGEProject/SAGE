
import Home from './HomePage/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './chatpage/Chat';
import Transcript from './Transcript/Transcript';
import Profile from './Profile/Profile';
import DegreePlan from './degreeplan/DegreePlan';
import Header from './components/DPNav';

import './global.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { render } from 'react-dom'

function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <div className = "Content">
            <Switch>
              <Route exact path  ="/">
                <Home />
              </Route>
              <Route path ="/chat">
                <Chat />
              </Route>
              <Route path ="/transcript">
                <Transcript />
              </Route>
              <Route path ="/profile-page">
                <Profile />
              </Route>
              <Route path ="/degreeplan">
                <DegreePlan />
              </Route>
            </Switch>
          </div>
        </div>
      </DndProvider>
    </Router>
  )
}


export default App;