import { Box, IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";

const SmallChatInput: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <Box className="smallChatInput" component="div">
      <Paper component="form" className="smallChatPaper">
        <IconButton
          className="iconButton2"
          sx={{ p: "10px" }}
          aria-label="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 25"
            fill="none"
          >
            <mask
              id="mask0_184_893"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="25"
            >
              <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_184_893)">
              <path
                d="M17.6731 16.1442C17.6731 17.7682 17.108 19.1501 15.9779 20.2901C14.8478 21.43 13.4721 22 11.851 22C10.2298 22 8.8526 21.43 7.71926 20.2901C6.58595 19.1501 6.01929 17.7682 6.01929 16.1442V7.15383C6.01929 5.99999 6.41992 5.01923 7.22119 4.21155C8.02247 3.40385 9.00003 3 10.1539 3C11.3077 3 12.2853 3.40385 13.0865 4.21155C13.8878 5.01923 14.2885 5.99999 14.2885 7.15383V15.6634C14.2885 16.3403 14.0527 16.9182 13.5812 17.3971C13.1096 17.8759 12.535 18.1153 11.8571 18.1153C11.1793 18.1153 10.601 17.8776 10.1222 17.4021C9.64331 16.9265 9.40389 16.347 9.40389 15.6634V6.88463H10.9039V15.6634C10.9039 15.9314 10.9939 16.157 11.174 16.3404C11.3542 16.5237 11.5782 16.6154 11.8462 16.6154C12.1141 16.6154 12.3382 16.5237 12.5183 16.3404C12.6984 16.157 12.7885 15.9314 12.7885 15.6634V7.14423C12.7782 6.40576 12.5218 5.78043 12.0191 5.26825C11.5164 4.75607 10.8947 4.49998 10.1539 4.49998C9.41618 4.49998 8.79265 4.75767 8.28329 5.27305C7.77392 5.78843 7.51924 6.41536 7.51924 7.15383V16.1442C7.50899 17.3532 7.92694 18.3814 8.77309 19.2288C9.61925 20.0763 10.6464 20.5 11.8545 20.5C13.0455 20.5 14.058 20.0763 14.8917 19.2288C15.7255 18.3814 16.1526 17.3532 16.1731 16.1442V6.88463H17.6731V16.1442Z"
                fill="#0F948B"
              />
            </g>
          </svg>
        </IconButton>

        <InputBase
          sx={{
            ml: 0,
            flex: 1,
            color: "#FFFFFF", // Change text color
            "& textarea": {
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, and Edge
              },
            },
          }}
          placeholder="Message Navhigh Co-Pilot"
          className="inputField"
          multiline
          maxRows={2}
          value={inputText}
          onChange={handleInputChange}
        />
        <IconButton
          className="iconButton"
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="29" height="29" rx="4" fill="#0F948B" />
            <path
              d="M13.75 22V9.87303L8.05383 15.5692L7 14.5L14.5 7L22 14.5L20.9461 15.5692L15.2499 9.87303V22H13.75Z"
              fill="#013B37"
            />
          </svg>
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SmallChatInput;
