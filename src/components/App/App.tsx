import React from 'react';
import './App.css';
import { Table } from '../Table/Table';
import { AppState } from '../Table/contracts/characters';

export class App extends React.Component<{}, AppState> {
  name = 'nombre'
  state = {
    Characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }
    ]
  };

  removeCharacter = (index: number) => {
    const { Characters } = this.state;
    console.log(index, Characters.filter((character, i) => i !== index));
    this.setState({
      Characters: Characters.filter((character, i) => i !== index) 
    });
  }

  render(){
    const { Characters } = this.state;
    return (
      <div className="container">
        <Table CharactersData={Characters} RemoveCharacter={this.removeCharacter} />
      </div>
    );
  }
}
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

