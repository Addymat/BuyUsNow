import logo from './logo.svg';
import './App.css';
import Body from './body';
import './bootstrap.css';
import Recommendevents from './Recommendevents';
import Upcominglist from './Upcominglist';
import Navoptions from './Navoptions';



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
    <>
    <Body/>
    
    <Recommendevents/>
    <Upcominglist/>
    </>
  );
}

export default App;
