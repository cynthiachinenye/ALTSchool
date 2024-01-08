import React, { useEffect, useState } from 'react'
import { signInWithRedirect, auth, provider, getRedirectResult, onAuthStateChanged } from '../Config/Config'

const Home = () => {
    const [user, setUser] = useState(null)
    const [signedIn, setSignedIn] = useState(false)

    const signIn = (e) => {
        e.preventDefault()
        signInWithRedirect(auth, provider);
    }
     const signOut =(e) =>{
        e.preventDefault()
       auth.signOut().then(()=>{})
     }
    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.

                if (result) {
                    setUser(result.user)
                    console.log(result.user)
                } else {
                    // ...
                }
            }).catch((error) => {
                console.log(error)
                // ...
            });
    }, [])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log(user)
                const { displayName, email, photoURL, uid } = user;
                setUser({ displayName, email, photoURL, uid });
                // ...
                setUser(null)
            } else {
                // User is signed out
                // ...
            }
        });

    }, [])
    return (
        <div>
            {
                user ? (
                    <div>
                    <h2>Welcome. you are signed in</h2>
                        <div>{user.displayName}</div>
                        <div>{user.email}</div>
                        <button onClick={signOut}>signout</button>
                    </div>
                ) : (
                    <div>
     <div style={signedIn? {}:{display:"none"}}> Sign in successful!</div>
      <button onClick={signIn}>Sign In </button>
</div>
                )}

        </div>

    )
}

export default Home
