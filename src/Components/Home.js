import React, { useEffect } from 'react'
import { signInWithRedirect, auth, provider, getRedirectResult } from '../Config/Config'

const Home = () => {
    const [user, setUser] = useState(null)

    const signIn=(e)=>{
     e.preventDefault()
     signInWithRedirect(auth, provider);
    }
    useEffect(()=>{
        getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    
    if(result){
        setUser(result.user)
        console.log(result.user)
    }else{
        // ...
    }
  }).catch((error) => {
console.log(error)
    // ...
  });
    },[])
  return (
    <div>
      <h1>Maya Edwin</h1>
      <div>
      <p>Maya is a Software Enginer, based in Nariaobi, kenya and a google developer expert in web deveploment</p>
      </div>
      <button onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Home
