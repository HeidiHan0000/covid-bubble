import { useState, useEffect } from "react"
import { ForceGraph2D } from 'react-force-graph'
import { Link} from "react-router-dom"
import { Context } from "./Store/appContext"
import { useContext } from "react"
import { Redirect, useHistory } from "react-router"

const MainPage = ({setSignIn, signIn}) => {
    const {store, actions} = useContext(Context)
    const [nodes_, setNodes] = useState([])
    const [links_,setLinks] = useState([])
    const [name, setName] = useState([])
    const [recieved, setRecieved] = useState(false)
    const [logout, setLogout] = useState(false)
    const history = useHistory()

    const logoutHandle = () => {
        actions.logout();
        setSignIn(false);
        <Redirect to="/" />
    }
    const handleClick = () => {
        // setSignIn(true);
        console.log("token", store.token);
        history.push("/editFriends")
        // <Redirect to="/" />
      }

    useEffect(() => {
        if (signIn){
            actions.getGraph(setNodes, setName ,setLinks).then(()=>{
                setRecieved(true)
            })
        }
    }, []);

    return (
        <div>
            {!store.token ? <Redirect to= "/" /> :
              (recieved ? 
                <div className="mainPageContainer">
                        {/* <h1 style={{textAlign: "center"}}>{name}'s Social Bubble</h1> */}
                    <ForceGraph2D
                        graphData={{nodes: nodes_, links: links_}} 
                        nodeId = "id" 
                        nodeColor= {node => 
                        node.group === 1 ? 
                            '#E6550D' 
                        : 
                            (node.group === 2 ? 
                                    '#FD8D3C' 
                                :
                                    '#36A7F9')}
                        nodeVal={node => Math.pow(node.group === 1 ? 1.25 : 1.15,3)}
                    />
                    <div className="mainpage-button-container">
                    <button className='main-button' onClick={handleClick}> Edit Friends List</button>
                    <button className='main-button' onClick={logoutHandle}> Sign Out </button>

                        </div>
                        

                        
                </div>
                : 
                <div>
                    <h1 style={{textAlign: "center"}}>Loading...</h1>
                </div>)
            
            }
            
        </div> 
    )
}

export default MainPage
