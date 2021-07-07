import React from 'react';
import Tweets from './Tweets';
import { SampleConsumer } from '../contexts/sample';

const Receives = () => {
    
    return (
        <SampleConsumer>{
            ({value}) => (
            <div>
                <h4 style={{textAlign:"center", color:"white"}}>Your text: {value}</h4>
                <Tweets text={value}/>
            </div>
            )
        }
        </SampleConsumer>
    )
}

export default Receives;
