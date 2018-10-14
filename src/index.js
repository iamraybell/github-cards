import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './App';
import DataProvider from './data'
import * as serviceWorker from './serviceWorker';



let dp = new DataProvider(['iamraybell', 'georgefrick', 'jeremytedwards','MartinGPuryear'])
dp.getData(function(data){
	ReactDOM.render(<CardList cards = {data}/>, document.getElementById('root'));
})









// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
