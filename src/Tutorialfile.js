import React,{ Component } from 'react';
import {CardList} from './Components/Card_List/CardList';
import './App.css';
import {SearchBox} from './Components/Searchbox/SearchBox';

class App extends Component {
   constructor(){
     super();
    this.state={
     monsters:[ ],
     searchField: ''
    };
  }
    // this.handleChange=this.handleChange.bind(this);
    handleChange=(e)=>{
      this.setState({searchField:e.target.value})
    }
   
   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())

    .then(users => this.setState({monsters:users}));

  }
  handleChange(e){
    this.setState({searchField:e.target.value})
  }

  render(){
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className="App">
        <h1 className="heading">Monsters Rolodex</h1>
      <SearchBox
      placeholder='Search monsters'
      handleChange={ this.handleChange}
      />
      <CardList monsters = { filteredMonsters }>
      </CardList>
      </div>
    );

  }

}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { CardList } from './components/card-list/card-list.component';
 
// class App extends Component {
//   constructor(){
//     super();
 
//     this.state =
//     {
//       monsters: []
//     };
 
//   }
 
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({monsters: users}));
//   }
//   render(){
//     return (
//       <div className="App">
//         <CardList monsters = { this.state.monsters}>
                  
//         </CardList>
        
        
       
//       </div>
//     );
//   }
 
// }
 
// export default App;