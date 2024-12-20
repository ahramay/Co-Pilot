import { Box, Fade, Popper } from "@mui/material";
import React, { useState } from "react";
import SmallNavbar from "../../shared/smallNavbar";
import SmallGeneral from "../smallGeneral";
import SmallChatInput from "../../shared/chatInput/smallChatInput";
import { RootState } from "../../../redux";
import { useSelector } from "react-redux";
import SmallStrategy from "../smallStrategy";
const ChatHead: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const advisery = useSelector(
    (state: RootState) => state.advisery.selectedAdvisery
  );

  return (
    <div>
      <Box className="chathead" component="div">
        <svg
          onClick={() => {
            setOpen(!open);
          }}
          style={{
            cursor: "pointer",
            zIndex: 1300,
            backgroundColor: "#012926",
            width:"70px",
            height:"70px",
            padding:"8px",
            borderRadius:"50%"
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="48"
          viewBox="0 0 56 48"
          fill="none"
        >
          <path
            d="M53.3055 17.8944C52.5567 17.1456 51.6351 16.5696 50.6559 16.128C47.3727 6.7584 38.4831 0 27.9999 0C17.5167 0 8.62711 6.7584 5.34391 16.128C4.88311 16.3392 4.42231 16.5504 3.99991 16.8384C1.65751 18.3552 0.563112 21.5616 0.409512 22.0224C0.390312 22.0608 0.390312 22.08 0.390312 22.08C0.236712 22.6944 0.159912 23.3472 0.159912 24C0.159912 27.4368 2.23351 30.5472 5.36311 31.8912C6.76471 35.904 9.16471 39.4944 12.4479 42.2784C12.0255 42.3744 11.6799 42.7392 11.6799 43.2V47.04C11.6799 47.5776 12.1023 48 12.6399 48H18.3999C18.9375 48 19.3599 47.5776 19.3599 47.04C19.3599 46.5024 18.9375 46.08 18.3999 46.08H13.5999V44.16H42.3999V46.08H26.0799C25.5423 46.08 25.1199 46.5024 25.1199 47.04C25.1199 47.5776 25.5423 48 26.0799 48H43.3599C43.8975 48 44.3199 47.5776 44.3199 47.04V43.2C44.3199 42.7392 43.9935 42.3744 43.5519 42.2784C46.8351 39.4944 49.2351 35.8848 50.6367 31.8912C53.7663 30.5472 55.8399 27.4368 55.8399 24C55.8399 21.7152 54.9375 19.5456 53.3055 17.8944ZM2.07991 24C2.07991 22.2144 2.77111 20.5248 4.03831 19.2384C4.21111 19.0848 4.40311 18.9696 4.57591 18.816C4.21111 20.4864 3.99991 22.2144 3.99991 24C3.99991 25.7856 4.23031 27.5328 4.61431 29.2416C3.03991 27.9936 2.07991 26.0736 2.07991 24ZM40.4607 42.24H15.5583C9.51031 38.1312 5.91991 31.3344 5.91991 24C5.91991 11.8272 15.8271 1.92 27.9999 1.92C40.1727 1.92 50.0799 11.8272 50.0799 24C50.0799 31.3152 46.4895 38.112 40.4607 42.24ZM51.3855 29.2416C51.7695 27.5328 51.9999 25.7856 51.9999 24C51.9999 22.2144 51.7887 20.4864 51.4239 18.816C51.5967 18.9696 51.7887 19.0848 51.9423 19.2384C53.2287 20.5248 53.9199 22.2144 53.9199 24C53.9199 26.0736 52.9599 27.9936 51.3855 29.2416Z"
            fill="#0F948B"
          />
          <path
            d="M27.9998 5.75989C17.939 5.75989 9.75977 13.9391 9.75977 23.9999C9.75977 33.0239 16.5758 38.3999 27.9998 38.3999C39.4238 38.3999 46.2398 33.0239 46.2398 23.9999C46.2398 13.9391 38.0606 5.75989 27.9998 5.75989ZM27.9998 36.4799C23.0846 36.4799 11.6798 35.2703 11.6798 23.9999C11.6798 14.9951 18.995 7.67989 27.9998 7.67989C37.0046 7.67989 44.3198 14.9951 44.3198 23.9999C44.3198 35.2703 32.915 36.4799 27.9998 36.4799Z"
            fill="#0F948B"
          />
          <path
            d="M22 28.488C23.6569 28.488 25 26.0256 25 22.988C25 19.9505 23.6569 17.488 22 17.488C20.3431 17.488 19 19.9505 19 22.988C19 26.0256 20.3431 28.488 22 28.488Z"
            fill="#15CC8F"
          />
          <path
            d="M33 28.488C34.6569 28.488 36 26.0256 36 22.988C36 19.9505 34.6569 17.488 33 17.488C31.3431 17.488 30 19.9505 30 22.988C30 26.0256 31.3431 28.488 33 28.488Z"
            fill="#15CC8F"
          />
        </svg>
      </Box>
      <Popper
        sx={{
          width: "100%",
          height: "100svh",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingBottom: "110px",
          paddingRight: "20px",
        }}
        open={open}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box
              sx={{
                border: 1,
                p: 1,
                width: 350,
                height: 550,
                borderColor: "#0F948B",
                backgroundColor: "#012926",
                borderRadius: 3,
                position: "relative", // Ensure position is relative for absolute children
              }}
            >
              <SmallNavbar />
              {advisery === "General" && <SmallGeneral />}
              {advisery === "Strategy" && <SmallStrategy />}

              <SmallChatInput />
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default ChatHead;
