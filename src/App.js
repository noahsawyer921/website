import logo from './logo.svg';
import GHlogo from './GHlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="AppBody">
        {/*Left column */}
        <div class="LeftColumn"></div>
        {/*Middle column */}
        <div class="CentralColumn">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Hi, my name is Noah Sawyer.
          </p>
          <p>
            This is a simple React app deployed on GitHub Pages.
          </p>
          <p> 
            For now, this is just a test, but please, feel free to check back soon!
          </p>
        </div>
        {/*Right column */}
        <div class="RightColumn"> </div>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <div class="Header">
        <p class="HeaderLeft">Noah Sawyer</p>
        <p class="HeaderRight"><a href="https://github.com/noahsawyer921/website/tree/main"><img class="HeaderLink" src={GHlogo} /></a></p>
      </div>
      <div class="HeaderSpacer"></div>
    </div>
  )
}

export default App;
