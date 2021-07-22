import React, { useState } from "react"
import { useEffect } from "react";
import { vectorToText } from "../utils/apiUtils";
import Tweet from "./Tweet";
const Tweets = ({text}) =>{

    const [tweets,setTweets] = useState([]);
    const [isLoading,setLoading] = useState(false);
    useEffect(()=>{
        async function a () {
                    if(text){
                    setLoading(true)
                    const data = await vectorToText(text);
                    const dat = Object.values(data);
                    setTweets(dat)
                    setLoading(false)
                    }
        }
        a(); 
   
    },[text]);
    
    const containerStyle ={
        height : "300px",
        padding : " 2rem 2rem",
        color : "white",
        fontSize : "1.2rem",
        display :"flex",
        margin : "0"
    }
    const tweetList = Object.values(tweets);
    
    return(
        <>
        <h2 style={{textAlign:"center", color:"white"}}> {isLoading && <p>Loading ...</p>}</h2>
        {!isLoading && <div className="container" style={containerStyle}>
            {tweetList.map((twee,key) => (
                <Tweet data={twee.text} key={key}/>
            ))}
        </div>}
        </>
    )
}

export default Tweets;