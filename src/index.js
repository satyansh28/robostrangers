import React from 'react';
import ReactDOM from 'react-dom';

import Cardlist from './Cardlist.js'
import list from './Robolist.js';
import Searchbox from './Searchbox.js'
import reportWebVitals from './reportWebVitals';
import './index.css';
const state={
  list2: list,
  searchfeild: '',
}
function oninput(event)
{
  state.searchfeild=event.target.value;
  
  state.list2=list.filter(rbs =>
    {return(rbs.name.toLowerCase().includes(state.searchfeild));}) 
  doit(); 
}
function doit()
{
ReactDOM.render(
    <div className='customcss'>
      <h1 className='thehead'>ROBOFRIENDS</h1>
      <hr />
      <Searchbox className='pa3' anyinput={oninput}/>
      <Cardlist robolist={state.list2}/>
    </div>,
  document.getElementById('root')
);
}
doit();

//for (let i=0;i<list.length;i++)
//{
  //renderrobot(list[i]);
//}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
