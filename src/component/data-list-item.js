import './data-element.js';

class AddItem extends HTMLElement {

  set Games(gm) {
    this._Games = gm;
    this.render();
  }

  render() {
    this.innerHTML = '';

    this._Games.forEach(gm => {
      const elementItem = document.createElement('data-item');
      elementItem.gameData = gm;
      this.appendChild(elementItem);
    });
  }

  renderError(message) {
    this.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('add-item', AddItem);
