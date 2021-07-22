import React, { useEffect, useState } from 'react'
import { SampleConsumer } from '../contexts/sample';
import './Sends.css'


const Sends = ({value,setValue})=>{
    const[input,setInput]=useState('');

    useEffect(()=>{
        setInput(value)
    },[value]);

    const onChange=(e)=>{
        const {target :{value}}=e;
        setInput(value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        setValue(input);
    }

    return(
        <div className="Sends">
        <form onSubmit={onSubmit}>
            <input className="input" placeholder="Write your sentence! and Click the bird!" value={input||''} onChange={onChange}/>
            <button className="button"/>
 
        </form>
        </div>
    )
}

const SendsContainer = ()=>{
    return(
    <SampleConsumer>
        {
            ({value,actions}) =>(
                <Sends
                value={value}
                setValue={actions.setValue}
                />
            )
        }
    </SampleConsumer>
    )
}

export default SendsContainer;
