import React from "react"
import './Tweet.css'
const Tweet = ({data,id}) =>{
   
   return  (
    <div className="tweetContainer" key={id}>
    <div className="tweetHead">Recommend Tweet</div>
    <div className="tweetBody">
        <textarea className="tweetText" defaultValue={data}/>
    </div>
    </div>
   )
}

export default Tweet

