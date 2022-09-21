import '../component/form-choose.js'
import '../component/data-list-item.js'
import DataStructur from '../data/data-structur.js'
const main = () => {
  const searchElement = document.querySelector('form-list');
  const elementValueList = document.querySelector('add-item');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataStructur.renderDataCharacter(searchElement.value);
      ViewData(result);
    } catch (message) {
      fallbackError(message);
    }
  };

  const ViewData = results => {
    elementValueList.Games = results;
  };

  const fallbackError = message => {
    elementValueList.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;