import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import locations from'./account.svg'

function Home() {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [secondName, setSecondName] = useState('');
  const [secondNameError, setSecondNameError] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState('');
  console.log('showpassword',showPassword)
  const [passwordMatchText, setPasswordMatchText] = useState('');
  const [currentEmail, setCurrentEmail] = useState(true);

    const [data, setData] = useState({
        f_name: "",
        l_name: "",
        user_name: "",
        password: "",
        confirm_password: "",
        checked: false,
        current_email: true
      });
    
      function handleChange(event) {
        // setData({
        //   ...data,
        //   [id]: event.target.value.trim()
        // })
        console.log('value', event.target.value);
        setConfirmPassword(event.target.value);

        if (password.length > event.target.value.length) {
          console.log('test1')
          setPasswordMatchText("")
        }

        // // else if (password.length === event.target.value.length) {
        //   console.log('test');
           if (password === event.target.value) {
            setPasswordMatchText("Passwords match")
          }
          else {
            setPasswordMatchText("Those passwords didn't match.")
          }
        // }

      }
    
      
      function handleCheckboxClick(event) {
        // const elem = document.getElementById('checkboxElem');
        // setData({
        //   ...data,
        //   checked: !data.checked
        // })
        // elem.checked = !elem.checked;
      }
    
      function handleNext() {

        if(!firstName) {
          setFirstNameError('Enter first name');
        } else {
          setFirstNameError('');
        }
        if(!secondName) {
          console.log('test')
          setSecondNameError('Enter last name');
        } else {
          setSecondNameError('');
        }
        if(!userName) {
          console.log('test')
          setUserNameError('Enter user name');
        } else {
          setUserNameError('');
        }
        if(!password) {
          console.log('test')
          setPasswordError('Enter password');
        } else {
          setPasswordError('');
        }
        if(!confirmPassword) {
          console.log('test')
          setConfirmPasswordError('Enter confirm password');
        } else {
          setConfirmPasswordError('');
        }
        if(!showPassword) {
          console.log('test')
          setShowPasswordError('Please confirm');
        } else {
          setShowPasswordError('');
        }


    
        // if (!data.user_name) {
        //     document.getElementById("user-para").innerHTML = "Choose a Gmail address";
        //     document.getElementById("user-para").style.color = "red";
        //     // document.getElementById("validationIcon").style.display = "inline";;loiuytrdsa
    
        // } else {
        //     document.getElementById("user-para").innerHTML = "you can use letters,numbers & periods";
        //     document.getElementById("user-para").style.color = "#828282";
        // }
    
        // if (!data.f_name && !data.l_name) {
        //     document.getElementById("name-para").innerHTML = "Enter first and last name";
        //     document.getElementById("name-para").style.color = "red";
    
        // } else if (!data.f_name && data.l_name) {
        //     document.getElementById("name-para").innerHTML = "Enter first name";
        //     document.getElementById("name-para").style.color = "red";
    
        // } else if (data.f_name && !data.l_name) {
        //     document.getElementById("name-para").innerHTML = "Enter last name";
    
        //     document.getElementById("name-para").style.color = "red";
    
        // } else {
        //     document.getElementById("name-para").innerHTML = "";
        //     // document.getElementById("name-para").style.color = "#828282";
        // }
    
        // // password & confirm_password
    
        // if (!data.password) {
        //     document.getElementById("password-para").innerHTML = "Enter password";
        //     document.getElementById("password-para").style.color = "red";
        //     // document.getElementById("validationIcon").style.display = "inline";
    
        // } else if (data.password && !data.confirm_password) {
        //     document.getElementById("password-para").innerHTML = "Enter confirm password";
        //     // document.getElementById("confirm-para").style.color = "red";
        //     // document.getElementById("validationIcon").style.display = "inline";
    
        // } else {
        //     document.getElementById("user-para").innerHTML = "";
        //     // document.getElementById("user-para").style.color = "#828282";
        // }
    
        // // passwords equal
    
        if (password && confirmPassword) {
            if (password !== confirmPassword) {
                // document.getElementById("password-para").innerHTML = "Those passwords didn't match.";
                setPasswordMatchText("Those passwords didn't match.")
            } else {
              setPasswordMatchText("Passwords match")
            }
        }
      }
    
      function handleGmailClick() {
          // let gmailLinkText = document.getElementById("gmailId").innerHTML;
          // document.getElementById("user_name").focus();
          // setData({
          //   ...data,
          //   current_email: !data.current_email
          // })
          setCurrentEmail(!currentEmail)
          if (currentEmail) {
              console.log('dataGmaiilClick', data);
              // document.getElementById("gmailId").innerHTML = "Create a new Gmail address instead";
              // document.getElementById("postfix").innerHTML = "";
              // document.getElementById("placeholder-text").innerHTML = "Your email address";
              // document.getElementById("user-para").innerHTML = "You'll need to confirm that this email belongs to you.";
              // document.getElementById("user_name").placeholder = "Your email address";
          }
    
      }
    
      // function getTitle() {
      //     var xhttp = new XMLHttpRequest();
      //     xhttp.onreadystatechange = function() {
      //         console.log('onreadystatechange');
      //         if (this.readyState == 4 && this.status == 200) {
      //             console.log(this.responseText);
      //             const responseParsed = JSON.parse(this.responseText);
      //             const title = responseParsed.title;
      //             document.getElementsByTagName('body')[0].innerHTML = title;
      //         }
      //     };
    
      //     xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
      //     xhttp.send();
    
      // }
    
      return (
          <div className="maindiv">
     <div className="App">
          <h2>Create Your Google Account</h2>
          <div className="main">
            <div className="input-row">
              <div className="input-container">
                <input value={firstName} className="header-input" type="text" placeholder="First Name" onChange={(ev)=>setFirstName(ev.target.value)} />
                <label className="placeholder-text">First Name</label>
                <p className='error'>{firstNameError}</p>
              </div>
              <div className="input-container">
                <input value={secondName} className="header-input" type="text" name="lname" placeholder="Last Name" id="l_name" onChange={(ev)=>setSecondName(ev.target.value)} />
                <label className="placeholder-text">Last Name</label>
                <p className='error'>{secondNameError}</p>
              </div>
            </div>
            {/* <input className="header-input" type="text" name="fname" placeholder="last name" /> */}
            <p></p>
            <div className="size input-container">
              <input value={userName} className="header-input user-input" id="user_name" placeholder={currentEmail ? 'Username' : 'You email address'} onChange={(ev)=>setUserName(ev.target.value)} />
              <span className="placeholder-text" id='placeholder-text'>Username</span>
              <p className='error'>{userNameError}</p>
              {currentEmail ?<span className="number" id='postfix'> @gmail.com</span> : null}
              <p className="para" id="user-para"><i className="fa-solid fa-circle-exclamation" id="validationIcon" style={{display: "none"}}></i>{currentEmail ? 'you can use letters,numbers & periods' : "Youll need to confirm that this email belongs to you"}</p>
              <div className="h4div">
                <h4 id="gmail" className="gmail" onClick={event => handleGmailClick()}>{currentEmail ? 'Use my current email address instead' : 'Create a new Gmail address instead'}</h4>
              </div>
            </div>
          </div>
    
          <div className="main">
            <div className="input-row">
              <div className="input-container">
                <input value={password} className="header-input" type={data.checked ? 'text' : 'password'} name="fname" placeholder="Password" id="password" onChange={(ev)=>setPassword(ev.target.value)} />
                <label className="placeholder-text">Password</label>
                <p className='error'>{passwordError}</p>
                <p id="password-para"></p>
              </div>
              <div className="input-container">
                <input value={confirmPassword} className="header-input" type={data.checked ? 'text' : 'password'} name="lname" placeholder="Confirm Password" id="confirm_password" onChange={(ev)=>handleChange(ev)} />
                <span className="placeholder-text">Confirm Password</span>
                <p className='error'>{confirmPasswordError}</p>
              </div>
            </div>
            {/* <input className="outer-input" type="text" name="fname" placeholder="Confirm" /> */}
          </div>
          <p className="para1">Use 8 or more characters with a mix of letters, numbers & symbols</p>
          <p className='error'>{passwordMatchText}</p>
          <div className="checkbox-div">
            <div className="checkbox-div1">
              <input className="checkbox1" type="checkbox" checked={showPassword} id="checkboxElem" onClick={(ev)=>setShowPassword(!showPassword)} />
            </div>
            <div className="checkbox2">
              <p onClick={(ev)=>setShowPassword(!showPassword)} style={{cursor: 'pointer', paddingLeft:'12px'}}>Show Password</p>
            </div>
          </div>
          <div className="sign">
            <div className="href">
              <a className="signin-link" href="Signin" onClick="window.alert('Loading')">Sign In Instead</a>
            </div>
            <div className="button1">
              <button className="button" onClick={handleNext}> Next</button>
            </div>
          </div>
          <div className="src1">
          <img src={locations} alt="modelvector" />
          </div>
          
        </div>
          </div>
       
       
      );

}

export default Home;
