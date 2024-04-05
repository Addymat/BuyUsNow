import logo from './logo.svg';
import './App.css';
import Body from './body';
import './bootstrap.css';
import Recommendevents from './Recommendevents';
import Upcominglist from './Upcominglist';



function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //   </>
    // </div>
    <div class ="final">
    <Body/>
    
    <Recommendevents/>
    <Upcominglist/>
    </div>
  );
}

export default App;
