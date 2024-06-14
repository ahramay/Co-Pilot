import { Box, Typography } from "@mui/material";
import React from "react";
interface Message {
  message: string;
}

const UserMessage: React.FC<Message> = ({ message }) => {
  return (
    <Box component="div" className="userChat">
      <Typography variant="body1" component="p">
        {message}
      </Typography>
    </Box>
  );
};

export default UserMessage;
