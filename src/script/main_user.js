import { async } from 'regenerator-runtime'
import DataStructur from '../data/data-structur'
const main_user =() =>{
    const elementSearch = document.querySelector('.btn-all-list-user')
    const getUser = async () =>{
        try{
            const result = await DataStructur.renderAllColor()
            viewColor(result)
        }
        catch(message){
            showResponseMessage(message)
        }
    }

    elementSearch.addEventListener('click', function(){
        getUser()
    })


    


    
const viewColor = (colorData) =>{
    const colorDataList = document.querySelector('#lis-data-color');

    colorData.forEach(ListcolorData => {
        colorDataList.innerHTML += `
          <div class="content-width w-50  justify-content-center d-flex">
            <div class="card w-50 m-5" style="background-color: ${ListcolorData.color};">
              <div class="card-body w-50" ">
                <h5>(ID : ${ListcolorData.id})</h5>
                <h6>NAME :  ${ListcolorData.name}</h5>
                <p>YEAR : ${ListcolorData.year}</p>
                <p>PANTONI : ${ListcolorData.pantone_value}</p>
              </div>
            </div>
          </div>
        `;
    })
}




const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };
}


export default main_user