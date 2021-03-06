import Credentials from "./Credentials"
import Login from "./Login"
import { useState } from "react"
import AddFriend from "./AddFriend"
import { Context } from "./Store/appContext"
import { useContext } from "react"
const addFriend = (friend) =>{
    console.log(friend)
  }

const LoginHeader = ({signIn,setSignIn}) => {
    const [notEntered, setnotEntered] = useState(true);
    const [signIned, setSignIned] = useState(false);
    const {store, actions} = useContext(Context);    
    const onClick = () => {
        setSignIned(true)
    }

    console.log("does it at least comehere")
    return (
        <div className="login-container">

            {!store.token
            ?
                (signIned 
                ? 
                    <Login signIn={signIn} setSignIn={setSignIn}/>
                : 
                <div className="signup-header">
                    <h1>Create account</h1>
                    <h2>Already have an account? </h2> <h2 className="link" onClick={onClick} style={{cursor: 'pointer'}}>Sign in</h2>
                    <Credentials notEntered={notEntered} setnotEntered={setnotEntered}/>
                </div>)
                :
                <div >
                    <h1 className="add-friends-header">Add a maximum of 4 people to your Covid-19 social bubble</h1>
                    <AddFriend onAdd={addFriend} setSignIn={setSignIn}/>
                </div>
            }
        </div>
    )
}

export default LoginHeader
