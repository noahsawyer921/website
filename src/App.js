import logo from './logo.svg';
import GHLogo from './GHlogo.png';
import LILogo from './LinkedInLogo.png';
import data from './data.json';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <AppBody />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <div className="Header">
        <p className="HeaderLeft">Noah Sawyer</p>
        <p className="HeaderRight"><a href="https://github.com/noahsawyer921/website/tree/main"><img className="HeaderLink" src={GHLogo} /></a></p>
        <p className="HeaderRight"><a href="https://www.linkedin.com/in/noah-sawyer-01a7971bb/"><img className="HeaderLink" src={LILogo} /></a></p>
      </div>
      <div className="HeaderSpacer"></div>
    </div>
  )
}

const AppBody = () => {
  return(
    <div className="AppBody">
      {/*Left column */}
      <div className="LeftColumn"></div>
      {/*Middle column */}
      <div className="CentralColumn">
        <Summary />
        <EducationHistory education={data.education} />
        <WorkHistory jobs={data.jobs}/>
      </div>
      {/*Right column */}
      <div className="RightColumn"></div>
    </div>
  );
}
const Summary = () => {
  return (
    <div>
      <h1 className="SectionHeader"> Noah Sawyer </h1>
      <p> Application Developer </p>
      <p> ---------@email.com </p>
      <p> XXX-XXX-XXXX </p>
    </div>
  );
}
const WorkHistory = (props) => {
  return(
    <div className="Section">
      <h2 className="SectionHeader"> Work Experience </h2>
      {
        props.jobs.map((job) => {
          return(<Job job={job} key={job}/>)
        })
      }
    </div>
  );
}

const Job = (props) => {
 return(
    <div className="Post">
      <h3 className="PostHeader"> {props.job.Company} </h3>
      <div className="PostBody">
        <p> <i>{props.job.Title}</i> </p>
        <p> {props.job.DateRange}</p>
        <ul>
          {
            props.job.Responsibilities.map((r) => {
              return (
                <li key={r}> {r} </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}


const EducationHistory = (props) => {
  return(
    <div className="Section">
      <h2 className="SectionHeader"> Education </h2>
      {
        props.education.map((ed) => {
          return(<Education education={ed} />);
        })
      }
    </div>
  );
}

const Education = (props) => {
  return(
    <div className="Post">
      <h3 className="PostHeader"> {props.education.Institution} </h3>
      <div className="PostBody">
        <p> {props.education.Degree}, {props.education.GPA}</p>
        <p> {props.education.DateRange} </p>
      </div>
    </div>
  )
}

const Skills = () => {
  return(
    <div>

    </div>
  );
}
const ContactMe = () => {
  return(
    <div>

    </div>
  );
}



export default App;
