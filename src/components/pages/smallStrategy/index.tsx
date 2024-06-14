import { Box } from "@mui/material";
import React from "react";
import BotResponce from "./botResponce";
import UserMessage from "./userMessage";

// import Image here
import Image from "../../../assests/images/strategy/Frame 399.png";

const SmallStrategy: React.FC = () => {
  return (
    <Box
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          scrollbarWidth: "thin",
          scrollbarColor: "#15CC8F transparent",
        },

        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#15CC8F",
          borderRadius: "3px",
        },
      }}
      padding={1}
      component={"div"}
      className="smallStratefy"
    >
      <BotResponce
        image={null}
        message="Hey there! How I can help you today?"
      />
      <UserMessage message="What are the latest market trends in Saudi Arabia?" />
      <BotResponce
        image={Image}
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <UserMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <BotResponce
        image={null}
        message="Hey there! How I can help you today?"
      />
      <UserMessage message="What are the latest market trends in Saudi Arabia?" />
    </Box>
  );
};

export default SmallStrategy;
