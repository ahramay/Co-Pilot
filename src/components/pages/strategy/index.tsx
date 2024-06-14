import React from "react";
import UserMessage from "./userMessage";
import BotResponce from "./botResponce";


// import Image here
import Image from "../../../assests/images/strategy/Frame 399.png"
const Strategy: React.FC = () => {
  return (
    <div className="strategy">
      <BotResponce image={null} message="Hey there! How I can help you today?" />
      <UserMessage message="What are the latest market trends in Saudi Arabia?" />
      <BotResponce image={Image} message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <UserMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <BotResponce image={null} message="Hey there! How I can help you today?" />
      <UserMessage message="What are the latest market trends in Saudi Arabia?" />
    </div>
  );
};

export default Strategy;
