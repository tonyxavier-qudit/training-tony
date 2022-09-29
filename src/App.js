import logo from './logo.svg';
import './App.css';
import Location from './account.svg'
import Locations from './new.jpg'

function App()  {

  function handleChange(elem, id) {
    console.log('elem');

}
const [data, setData] = useState({
    f_name: "",
    l_name: "",
    user_name: "",
    password: "",
    confirm_password: "",
  });

  return (
      <div className="main1">
<div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>testing</div>
      </header> */}
      {/* <div className="srcimg">
      <img src={Locations} alt="ModelVector" />
      </div>
       */}
      <div className="new">
      <h2>Creat Your Google Account</h2>
      </div>
     
      <div className="main">
          <div className="input-row">
              <div className="input-container">
                  <input className="header-input" type="text" name="fname" placeholder="First Name" id="f_name" onKeyUp={handleChange(this, 'f_name') }/>
                  <label className="placeholder-text">First Name</label>
                  <p id="name-para"></p>
                
              </div>

              <div className="input-container">
                  <input className="header-input" type="text" name="lname" placeholder="Last Name" id="l_name" onKeyUp={handleChange(this, 'l_name')} />
                  <span className="placeholder-text">Last Name</span>

              </div>
          </div>
          {/* <input className="header-input" type="text" name="fname" placeholder="last name" /> */}
          <p></p>
          <div className="size input-container">
              <input className="header-input user-input" id="user_name" placeholder="Username" onKeyUp={handleChange(this, 'user_name')} />
              <span className="placeholder-text">Username</span>
              <span className="number">@gmail.com</span>
              <p className="para" id="user-para"><i className="fa-solid fa-circle-exclamation" id="validationIcon" style={{display: "none"}}></i>you can use letters,numbers & periods
              </p>
              <div className="h4div">


                  <h4 id="gmail" className="gmail" onclick="handleGmailcK()"> Use my current email address instead
                  </h4>

              </div>
          </div>

      </div>

      <div className="main">

          <div className="input-row">
              <div className="input-container">
                  <input className="header-input" type="password" name="fname" placeholder="Password" id="password" onKeyUp={handleChange(this, 'password')} />
                  <label className="placeholder-text">Password</label>
                  <p id="password-para"></p>
              </div>

              <div className="input-container">
                  <input className="header-input" type="password" name="lname" placeholder="Confirm" id="confirm_password" onKeyUp={handleChange(this, 'confirm_password')} />
                  <span className="placeholder-text">Confirm</span>
              </div>
          </div>
          {/* <input className="outer-input" type="text" name="fname" placeholder="Confirm" /> */}
      </div>
      <p className="para1">Use 8 or more characters with a mix of letters, numbers & symbols</p>
      <div className="checkbox-div">
          <div className="checkbox-div1">

              <input className="checkbox1" type="checkbox" id="checkboxElem" />
          </div>
          <div className="checkbox2">

              <p onclick="handleCheckboxClick()" style={{cursor: 'pointer', paddingLeft:'12px'}}>Show Password
              </p>
          </div>
      </div>
      <div className="sign">
          <div className="href">
              <a className="signin-link" href="Sign In Instead" onclick="window.alert('Loading')">Sign In
                  Instead</a>
          </div>
          <div className="button1">
              <button className="button" onclick="getTitle()"> Next</button>
          </div>
      </div>
      
     
     
     
  </div>
  <div className="main2">
  <img src={Location} alt="ModelVector" />
  </div>
 
      </div>
    
  
  );
}


    

  


export default App;
