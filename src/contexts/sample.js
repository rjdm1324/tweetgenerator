import React, { createContext, useState } from 'react';

const Context = createContext();

const {Provider, Consumer : SampleConsumer} =Context;

const SampleProvider =({children})=>{
    const [value,setValue]= useState();

    const actions = {
        setValue: (value) =>{
            setValue(value)
        }
    }

    const valueProvider = {value,actions};
    return(
        <Provider value={valueProvider}>
            {children}
        </Provider>
    )
}

export{
    SampleConsumer,
    SampleProvider,
};
