class DataStructur{
    static renderDataCharacter(data){
      return  fetch(`https://www.amiiboapi.com/api/amiibo/?name=${data}`)
        .then(response =>{
            return response.json()
        })
        .then(responseJson =>{
            if(responseJson.amiibo){
                return Promise.resolve(responseJson.amiibo);
            }else{
                return Promise.reject(`${data} is not found`);
            }
        })
    }


    static renderAllColor(){
        return fetch('https://reqres.in/api/{resource}')
        .then(response =>{
            return response.json()
        })
        .then(responseJson =>{
            if(responseJson.data){
                return Promise.resolve(responseJson.data);
            }else{
                return Promise.reject('is not found')
            }
        })
    }



}

export default DataStructur