import {useEffect, useState} from 'react'
import { gapi } from 'gapi-script'
import {GoogleLogin, GoogleLogout } from 'react-google-login'
import image from './image'

const client_id='566353693394-7h2hvfb5ik14te2ja9eahkqva0e8n90s.apps.googleusercontent.com'
function Login(props){
    const [profileObj, setprofileObj]=useState({})
    const[ fullname, setfullname]=useState('')
    const[email, setemail]=useState('')
    const[imageURL, setimageURL]=useState('')
    const client_id='566353693394-7h2hvfb5ik14te2ja9eahkqva0e8n90s.apps.googleusercontent.com'
    const onSuccess=(res)=>{
       
        setemail(res.profileObj.email)
        setfullname(res.profileObj.name)
        setimageURL(res.profileObj.imageUrl)
        console.log("Login success! res:", res);
        console.log('Email:', res.profileObj.email);
        console.log('image:', res,profileObj.imageUrl);
    console.log('Name:', res.profileObj.name);
    }
    const onFailure=(res)=>{
        console.log("Login success! res:", res);
    }
    return(
        <div id='signInButton'>
              <div id='signinDiv'>
       <span>Name: {fullname}</span><br/>
       <span>Email: {email}</span><br/>
       <img src={imageURL} alt={`image of ${fullname}`}/>
    </div>
            <GoogleLogin
            clientId={client_id}
            buttonText='Login with google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}

//logout
function LogOut(){
    const client_id='566353693394-7h2hvfb5ik14te2ja9eahkqva0e8n90s.apps.googleusercontent.com'
    const onSuccess=()=>{
        console.log("Logout success! :");
    }
    
    return(
        <div id='signInButton'>
            <GoogleLogout
            clientId={client_id}
            buttonText={'logout'}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
function Auth(){

   
useEffect(() => {
    const client_id='566353693394-7h2hvfb5ik14te2ja9eahkqva0e8n90s.apps.googleusercontent.com'
 function start(){
    gapi.client.init({
        clientId:client_id,
        scope:''
    })
 }
 gapi.load('client:auth2',start)

}, []);


    return(
<div className='App'>
  
    <Login />

    <LogOut/> 
</div>
    )
}
export default Auth
