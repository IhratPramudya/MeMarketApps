class FormList extends HTMLElement{
 
    connectedCallback(){
        this.render()
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render()
    }

    get value(){
        return this.querySelector('#pet-select').value;
    }

    render() {
        this.innerHTML = `
            <style>
                .form-link-game{
                    box-sizing: border-box;
                    padding: 40px;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    width: 50%;
                    margin: 0 auto;
                    margin-top: 100px;
                    background-color: #FD841F;
                }

                select{
                    width: 100%;
                    padding: 30px;
                    border-radius: 5px;
                }

                button{
                    padding: 10px;
                    margin: 0 auto;
                    width: 50%;
                    border-radius: 10px;
                    margin-top: 10px;
                }

                @media (max-width: 575px) {
                    .form-link-game{
                        box-sizing: border-box;
                        padding: 5px;
                        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                        width: 90%;
                        margin: 0 auto;
                        margin-top: 50px;
                    }

                    select{
                        width: 100%;
                        padding: 5px;
                        border-radius: 5px;
                    }
    
                    button{
                        padding: 10px;
                        margin: 0 auto;
                        width: 100%;
                        border-radius: 10px;
                        margin-top: 10px;
                    }

                    .form-link-game .grub-form h2{
                        font-size: 5px;
                    }
                  }
            </style>
            <div class="form-link-game">    
                <div class="grub-form">
                    <h1>Search Your Game</h2>
                    <select id="pet-select">
                        <option value="">--Please choose your Genres--</option>
                        <option value="mario">mario</option>
                        <option value="Mario - Gold Edition">Mario - Gold Edition</option>
                        <option value="Mario - Silver Edition">Mario - Silver Edition</option>
                        <option value="8-Bit Mario Classic Color">8-Bit Mario Classic Color</option>
                        <option value="8-Bit Mario Modern Color">8-Bit Mario Modern Color</option>
                        <option value="Mario - Wedding">Mario - Wedding</option>
                        <option value="Mario - Power Up Band">Mario - Power Up Band</option>
                        <option value="Dr. Mario">Dr. Mario</option>

                        <option value="Mario - Cat">Mario - Cat</option>
                        <option value="Luigi">Luigi</option>
                        <option value="Luigi - Power Up Band">Luigi - Power Up Band</option>
                        <option value="Peach">Peach</option>
                        <option value="Yoshi">Yoshi</option>

                    </select>
                    <button id="searchButton" type="submit">search</button>
                </div>
            </div>
        `
        this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define('form-list', FormList);