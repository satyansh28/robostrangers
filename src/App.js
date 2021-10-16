
import React,{ Component } from 'react';
import './index.css';
import Searchbox from './Searchbox';
import Cardlist from './Cardlist';
import Scroll from './Scroll.js';
class App extends Component
{
    constructor()
    {
        super();
        this.state={
            listofrobs: [],
            searchfeild: ''
        }
        this.flag=0;
    }
    oninput=(event)=>
    {
        this.setState({searchfeild :event.target.value})
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({listofrobs:users})});
    }
    render()
    {
        const newlist=(this.state.listofrobs).filter(rbs=>
            rbs.name.toLowerCase().includes(this.state.searchfeild.toLocaleLowerCase()));
        ///console.log('rendered\n');
            if(this.state.listofrobs.length===0)
        {
            return(<h1 className='tc'>Loading...</h1>);
        }
        else{
        return(
        <div className='customcss'>
        <h1 className='thehead'>ROBOSTRANGERS</h1>
        <hr />
        <Searchbox className='pa3' anyinput={this.oninput}/>
        <Scroll><Cardlist robolist={newlist}/></Scroll>
        </div>
        );
        }
    }
}
export default App;