import 'regenerator-runtime';
import './component/navbar.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import main from './script/main.js';
import mainUser from  './script/main_user';


document.addEventListener('DOMContentLoaded', main);
document.addEventListener('DOMContentLoaded', mainUser);