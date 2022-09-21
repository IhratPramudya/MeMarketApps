class DataItem extends HTMLElement {
    set gameData(game) {
      this._gameData = game;
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <style>
      import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
      </style>
      <div class="container">
        <div class="content">
            <h2>${this._gameData.character}</h2>
            <img src="${this._gameData.image}" class="rounded mx-auto d-block" alt="...">
            <ul>
                <li>Series : ${this._gameData.amiiboSeries}</li>
                <li>Head : ${this._gameData.head}</li>
                <li>release :</li>
                <ul>
                    <li>${this._gameData.release.au}</li>
                </ul>
                <li>Series : ${this._gameData.amiiboSeries}</li>
            </ul>
        </div>
      </div>
      `;
    }
  }
  
  customElements.define('data-item', DataItem);
  