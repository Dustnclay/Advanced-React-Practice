import React, {Component} from 'react';
import './App.css';
import Card from './components/Card'
import Nav from './components/Nav'
import axios from 'axios';

class App extends Component{
  constructor(){
    super()
    this.state={
      players:[]
    }
  }

componentDidMount(){
  axios.get('http://localhost:5000/api/players')
  .then(resp =>{ 

    this.setState({players: resp.data})})
    .catch(err => {
      console.log('cDidMount:',err)
    })
}

  render(){
    
    return(
      < >
        <div className='navbar' >
          <Nav/>
        </div>
        <div className='container' >
          {this.state.players.map(player=>
          <Card key={player.rank} player={player}/>            
          )}
        </div>
      </>
    )
  }
}

export default App


// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
