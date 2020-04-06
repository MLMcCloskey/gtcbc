import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import FriendCard from "./components/friendCard";
import props from "./components/friendCard";
import friends from "./friends.json";

class App extends Component {
  state = { friends };
  render() {
    return (
      // console.log(friends)
      <Wrapper>
        <Title>Friends List</Title>
        {/* <FriendCard {SpongeBobCard} /> */}
        {/* <FriendCard {SquidwardCard} /> */}
        {/* <FriendCard MrKrabsCard /> */}
        {
          friends.map((friend) => (
          <FriendCard key={friend.id} {...friend} />        
          ))
        }
    
      </Wrapper>
    )
  }
};

export default App;
