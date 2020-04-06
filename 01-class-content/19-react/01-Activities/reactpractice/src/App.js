import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import JSXVariables from "./components/JSXVariables";
import Header from './components/Header';
import Player from './components/Player';
import Counter from './components/Counter';

const PLAYERS = [
	{
		name: "Ratthew",
		score: 420,
		id: 1,
	},
	{
		name: "Garland",
		score: 69,
		id: 2,
	},
	{
		name: "Andrea",
		score: 100,
		id: 3,
	},
];


// function Header(props) {
// 	return(
// 		<div className="header">
//       <h1>{props.title}</h1>
//     </div>
// 	);
// }

// Header.propTypes = {
// 	title: React.PropTypes.string,
// };


// var Counter = React.createClass({
// 		render: function (){
// 			return(
// 			<div className="counter">
// 				<button className="counter-action decrement"> - </button>
// 				<div className="counter-score"> {this.props.score} </div>
// 				<button className="counter-action increment"> + </button>
// 			</div>
// 			);
// 		}
//   });
  
// 	class Counter extends React.component{
//     constructor(props){
//       super(props);
//     }
//       render(){
//         return(
//         <div className="counter">
//           <button className="counter-action decrement"> - </button>
//           <div className="counter-score"> {this.props.score} </div>
//           <button className="counter-action increment"> + </button>
//         </div>
//         );
//       }
//     };

// Counter.propTypes = {
// 	score: React.PropTypes.number.isRequired,
// }


// function Player(props) {
// 	return(
// 		<div className="player">
//           <div className="player-name">
// 						{props.name}
//           </div>
          
// 					<div className="player-score">
// 						<Counter score={props.score}/>
//           </div>
//         </div>
// 	);
// }

// Player.propTypes = {
// 	name: React.PropTypes.string.isRequired,
// 	score: React.PropTypes.number.isRequired,
// }

// Player.defaultProps = {
// 	score: 0	
// }


class App extends React.Component {
  constructor(...props) {
    super(...props);
  } 
    render() {
      return (
        <div className="scoreboard">
        
        <Header title={this.props.title}/>
      
        <div className="players">
          {this.props.players.map(function(player){
            return <Player name={player.name} score={player.score} key={player.id} />
          })}
          {/* <Player {...props.Player}/> */}
        </div>
      </div>
    );
  }
}


// App.propTypes = {
// 	title: React.PropTypes.string,
// 	players: React.PropTypes.arrayOf(React.PropTypes.shape({
// 		name: React.PropTypes.string.isRequired,
// 		score: React.PropTypes.number.isRequired,
// 		id: React.PropTypes.number.isRequired,
// 	})).isRequired,
// };

App.defaultProps = {
	title: "Burn-O-Meter"	
}

export default App;
