import { Box, Typography } from "@mui/material";
import React from "react";
interface Message {
  message: string;
  image: any;
}
const BotResponce: React.FC<Message> = ({ message, image }) => {
  return (
    <Box>
      <Box component={"div"} className="botResponce">
        <div>
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1.01001"
              width="31"
              height="31"
              rx="15.5"
              stroke="#0F948B"
              stroke-opacity="0.4"
            />
            <path
              d="M22.593 14.342V22.81H22.585V24.51L19.703 22.088L19.497 21.916L18.289 20.9L17.707 20.41L16.793 19.642L15.205 18.308V24.508C12.001 24.492 9.40698 21.886 9.40698 18.676V10.21H9.41498V8.51001L12.297 10.932L12.503 11.104L13.711 12.12L14.293 12.61L15.207 13.378V13.388L16.795 14.72V8.51001C19.999 8.52601 22.593 11.132 22.593 14.342Z"
              fill="#15CC8F"
            />
          </svg>
        </div>
        <Typography variant="body1" component="p">
          {message}
        </Typography>
      </Box>
      {image && (
        <Box
          component="img"
          src={image}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            border: "1px solid #17CC8E",
            borderRadius: 3,
            marginY: 2,
          }}
        />
      )}
    </Box>
  );
};

export default BotResponce;
