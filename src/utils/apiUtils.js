import axios from "axios"


const textToVector =  async (text) =>{
   const response = await axios({
        method :'post',
        url : 'https://main-gpt-2-server-gkswjdzz.endpoint.ainize.ai/preprocess',
        headers : {'Content-Type' : "application/json"},
        data : {"context" : text}
        }).then(response => 
           {
              return response.data
           }
     ).catch(error=>{
        console.error(error);
     });
     return response;
}


const vectorPrediction = async(text) => {
   let vector = await textToVector(text)
   vector = vector.substr(1)
   let vec = vector.split(',').map(function(item) {
      return parseInt(item);
  });
    const response = await axios({
        method :'post',
        url : 'https://train-dz1w9314dfq7ak9g7ca6-gpt2-train-teachable-ainize.endpoint.ainize.ai/predictions/gpt-2-en-small-finetune',
        headers : {'Content-Type' : 'application/json'},
        data : {"text" : vec,
                "num_samples" : 3,
                "length" : 50,
                }
        }).then(response => 
           {
              return response.data;
           } 
     ).catch(error=>{
        console.error(error);
     });
     return response;
    }

export const vectorToText = async(text) => {
   let vector = new Array(await vectorPrediction(text));
   const vec = JSON.stringify(vector)
   const {0 : dat}= JSON.parse(vec);
    const response = await axios({
        method :'post',
        url : 'https://main-gpt-2-server-gkswjdzz.endpoint.ainize.ai/postprocess',
        headers : {'Content-Type' : "application/json",
                    'accept' : 'application/json' 
                  },
        data : dat
        }).then(response => 
           {
              return response.data;
           } 
     ).catch(error=>{
        console.error(error);
     });
     return response
}
