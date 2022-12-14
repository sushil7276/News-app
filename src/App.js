import './App.css';

import React, { useState } from 'react'
// import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBarF from './components/NavBarF';

// **** THIS IS CLASS BASED COMPONENT ****
// export class App extends Component {
//   pageSize = 15;
//   apiKey = process.env.REACT_APP_NEWS_API

//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     setState({ progress: progress })
//   }
//   render() {
//     return (
//       <Router>
//         <div>

//           <NavBar />
//           <LoadingBar
//             color='#f11946'
//             progress={state.progress}
//           />

//           <Switch>

//             <Route exact path="/" >
//               <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />
//             </Route>
//             <Route exact path='/business' >
//               <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />
//             </Route>
//             <Route exact path='/entertainment'  >
//               <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />
//             </Route>
//             <Route exact path='/general'  >
//               <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />
//             </Route>
//             <Route exact path='/health'  >
//               <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />
//             </Route>
//             <Route exact path='/science'  >
//               <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />
//             </Route>
//             <Route exact path='/sports'  >
//               <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />
//             </Route>
//             <Route exact path='/technology'  >
//               <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />
//             </Route>

//           </Switch>
//         </div>
//       </Router>
//     )
//   }
// }
// export default App

// **** THIS IS A FUNCTION BASED COMPONENT ****

export const App = () => {

  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>

        <NavBarF />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />

        <Switch>

          <Route exact path="/" >
            <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />
          </Route>
          <Route exact path='/business' >
            <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />
          </Route>
          <Route exact path='/entertainment'  >
            <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />
          </Route>
          <Route exact path='/general'  >
            <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />
          </Route>
          <Route exact path='/health'  >
            <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />
          </Route>
          <Route exact path='/science'  >
            <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />
          </Route>
          <Route exact path='/sports'  >
            <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />
          </Route>
          <Route exact path='/technology'  >
            <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App