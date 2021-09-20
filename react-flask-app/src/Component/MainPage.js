import { useState, useEffect } from "react"
import { ForceGraph2D } from 'react-force-graph'
const MainPage = () => {
    const [nodes_, setNodes] = useState([])
    const [links_,setLinks] = useState([])
    const [recieved, setRecieved] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_TEST}/mainpage/session`)
        .then(response => response.json())
        .then(data => {
            setNodes(data.nodes)
            setLinks(data.links)
            setRecieved(true)
        })
    }, [])
    return (
        <div>
            <h1>Mainpage</h1>
            {recieved &&<ForceGraph2D graphData={{nodes: nodes_, links: links_}} nodeId = "id" />}
        </div>
    )
}

export default MainPage
