import React, { useState } from "react";
import {
  AppBar,
  Box,
  Collapse,
  Divider,
  Drawer,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import collapseData from "./collapseData";
// import icons here
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// import Images here
import HistoryList from "../historyList";
import General from "../../pages/general";
import Strategy from "../../pages/strategy";
import ChatInput from "../chatInput";
import { setAdvisery } from "../../../redux/slice/adviserySlice";
import { RootState } from "../../../redux";
const drawerWidth = 240;

interface CaretIconProps {
  isActive: boolean;
}
const CaretIcon = styled("div")<CaretIconProps>(({ isActive }) => ({
  transition: "transform 0.3s ease-in-out",
  transform: isActive ? "rotate(0deg)" : "rotate(180deg)",
  marginTop: 0,
  backgroundColor: "transparent !important",
}));

const dummyData: { date: string; msg: string[] }[] = [
  {
    date: "Today",
    msg: [
      " Lorem ipsum dolor sit amet  consectetur adipiscing",
      "Lorem ipsum dolor sit amet consectetur adipiscing",
      "Lorem ipsum dolor sit amet consectetur adipiscing",
    ],
  },
  {
    date: "Last 7 Days",
    msg: [
      "Lorem ipsum dolor sit amet consectetur adipiscing",
      "Lorem ipsum dolor sit amet consectetur adipiscing",
      //   "Lorem ipsum dolor sit amet consectetur adipiscing",
      //   "Lorem ipsum dolor sit amet consectetur adipiscing",
      //   "Lorem ipsum dolor sit amet consectetur adipiscing",
    ],
  },
];

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [smallDrawerOpen, setSmallDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  // ------------  import redux state here
  const advisery = useSelector(
    (state: RootState) => state.advisery.selectedAdvisery
  );

  // --------------

  const handleCollapse = () => {
    setOpen(!open);
  };
  const adviseryChange = (title: string) => {
    dispatch(setAdvisery(title));
    handleCollapse();
  };
  return (
    <div className="sidebar">
      <Box sx={{ display: "flex" }}>
        <AppBar
          className="appBar"
          position="fixed"
          sx={{
            width: isMediumScreen ? "100%" : `calc(100% - ${drawerWidth}px)`,
            ml: isMediumScreen ? `${drawerWidth}px` : 0,
          }}
        >
          <Box
            height={55}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ paddingX: 3 }}
          >
            {isMediumScreen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                onClick={() => {
                  setSmallDrawerOpen(!smallDrawerOpen);
                }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10ZM2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
                  fill="#0F948B"
                />
              </svg>
            )}

            <Typography
              variant="h5"
              component={"div"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={handleCollapse}
              className="selectedAdviser"
              sx={{ cursor: "pointer" }}
            >
              {advisery}
              <CaretIcon isActive={open}>
                <KeyboardArrowDownOutlinedIcon
                  sx={{ backgroundColor: "transparent" }}
                />
              </CaretIcon>
            </Typography>
            {/* home icon svg code */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              cursor="pointer"
              onClick={() => navigate("/")}
            >
              <path
                d="M11.4697 4.09601C11.7626 3.80312 12.2374 3.80312 12.5303 4.09601L21.2197 12.7854C21.5126 13.0782 21.9874 13.0782 22.2803 12.7854C22.5732 12.4925 22.5732 12.0176 22.2803 11.7247L13.591 3.03535C12.7123 2.15667 11.2877 2.15667 10.409 3.03535L1.71967 11.7247C1.42678 12.0176 1.42678 12.4925 1.71967 12.7854C2.01256 13.0782 2.48744 13.0782 2.78033 12.7854L11.4697 4.09601Z"
                fill="#0F948B"
              />
              <path
                d="M12 5.687L20.159 13.846C20.1887 13.8757 20.2191 13.9044 20.25 13.9322V20.13C20.25 21.1656 19.4105 22.005 18.375 22.005H15C14.5858 22.005 14.25 21.6692 14.25 21.255V16.755C14.25 16.3408 13.9142 16.005 13.5 16.005H10.5C10.0858 16.005 9.75 16.3408 9.75 16.755V21.255C9.75 21.6692 9.41421 22.005 9 22.005H5.625C4.58947 22.005 3.75 21.1656 3.75 20.13V13.9322C3.78093 13.9044 3.81127 13.8757 3.84099 13.846L12 5.687Z"
                fill="#0F948B"
              />
            </svg>
          </Box>
          <Collapse
            component="div"
            className="appbarCollapse"
            in={open}
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#013b37",
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
          >
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                margin:"10px"
              }}
              component={"p"}
            >
              Select Advisor
            </Typography>
            {collapseData.map((value, index) => {
              return (
                <div
                  onClick={() => adviseryChange(value.title)}
                  key={`${value.title}_ ${index}`}
                  className="collapseDiv"
                >
                  <div>{value.icon}</div>
                  <section className="textSection ">
                    <p>{value.title}</p>
                    <small>{value.text}</small>
                  </section>

                  {advisery === value.title && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{ position: "absolute", right: "25px" }}
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.8566 8.19113C14.1002 7.85614 14.0261 7.38708 13.6911 7.14345C13.3561 6.89982 12.8871 6.97388 12.6434 7.30887L9.15969 12.099L7.28033 10.2197C6.98744 9.92678 6.51256 9.92678 6.21967 10.2197C5.92678 10.5126 5.92678 10.9874 6.21967 11.2803L8.71967 13.7803C8.87477 13.9354 9.08999 14.0149 9.30867 13.9977C9.52734 13.9805 9.72754 13.8685 9.85655 13.6911L13.8566 8.19113Z"
                        fill="#15CC8F"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </Collapse>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              borderRight: "1px solid #0F948B",
              width: isMediumScreen ? 300 : drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#012926",
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
          variant={isMediumScreen ? "temporary" : "permanent"}
          anchor="left"
          open={smallDrawerOpen}
        >
          <Box
            minHeight={54}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingX={2}
          >
            {isMediumScreen && (
              <svg
                onClick={() => {
                  setSmallDrawerOpen(!smallDrawerOpen);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.75 19.5L8.25 12L15.75 4.5"
                  stroke="#0F948B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            {/* Logo svg code */}
            <svg
              width="116"
              height="27"
              viewBox="0 0 116 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
            >
              <g clip-path="url(#a)">
                <path
                  d="M21.85 9.664v14.031H21.836v2.817l-4.775-4.013-.341-.285-2.002-1.684-.965-.812-1.514-1.272-2.632-2.21v10.274C4.298 26.482 0 22.164 0 16.845V2.817H.013V0l4.775 4.013.341.285 2.002 1.684.965.812 1.515 1.272v.017l2.632 2.207V0c5.31.027 9.608 4.345 9.608 9.664ZM42.19 9.359v11.864h-2.445V11.52h-4.845v9.704H32.454V9.359H42.19Zm8.514-.369c2.085 0 3.603 1.01 4.166 2.207h.066c-.023-.252-.046-.554-.046-1.174V9.359h2.24v11.864h-2.24v-.852c0-.53.023-.874.046-1.196h-.066c-.61 1.402-2.22 2.416-4.258 2.416-3.532 0-5.888-2.644-5.888-6.3 0-3.655 2.492-6.3 5.978-6.3h.003ZM54.804 15.268c0-2.393-1.584-4.093-3.804-4.093s-3.804 1.7-3.804 4.093c0 2.393 1.63 4.093 3.804 4.093s3.804-1.723 3.804-4.093ZM63.231 21.223 59.178 9.359h2.628l3.013 9.68h.09l3.013-9.68h2.605l-4.03 11.864h-3.26ZM72.56 21.223V3.977h2.446v5.382h7.314v11.864h-2.446V11.52h-4.868v9.704H72.56Zm12.842-15.268c0-.852.656-1.495 1.495-1.495s1.495.643 1.495 1.495-.68 1.494-1.495 1.494-1.495-.643-1.495-1.494Zm.271 15.268V9.359h2.446v11.864h-2.446ZM96.365 8.991c2.062 0 3.623.964 4.259 2.23h.07c-.024-.298-.047-.597-.047-1.127V9.359h2.244v17.153H94.17v-2.184h6.296v-4.093c0-.577.024-.852.068-1.173h-.09c-.497 1.173-1.992 2.137-3.964 2.137-3.33 0-5.819-2.552-5.819-6.095 0-3.543 2.4-6.118 5.707-6.118ZM93.15 15.085c0 2.277 1.584 3.91 3.715 3.91s3.716-1.657 3.716-3.91c0-2.254-1.561-3.911-3.716-3.911-2.154 0-3.715 1.634-3.715 3.911ZM106.24 21.223V3.977h2.446v5.382H116v11.864h-2.446V11.52h-4.868v9.704H106.24Z"
                  fill="#15CC8F"
                />
                <g fill="#fff">
                  <path d="M42.19 9.359v11.864h-2.445V11.52h-4.845v9.704H32.454V9.359H42.19Zm8.514-.369c2.085 0 3.603 1.01 4.166 2.207h.066c-.023-.252-.046-.554-.046-1.174V9.359h2.24v11.864h-2.24v-.852c0-.53.023-.874.046-1.196h-.066c-.61 1.402-2.22 2.416-4.258 2.416-3.532 0-5.888-2.644-5.888-6.3 0-3.655 2.492-6.3 5.978-6.3h.003ZM54.804 15.268c0-2.393-1.584-4.093-3.804-4.093s-3.804 1.7-3.804 4.093c0 2.393 1.63 4.093 3.804 4.093s3.804-1.723 3.804-4.093ZM63.231 21.223 59.178 9.359h2.628l3.013 9.68h.09l3.013-9.68h2.605l-4.03 11.864h-3.26ZM72.56 21.223V3.977h2.446v5.382h7.314v11.864h-2.446V11.52h-4.868v9.704H72.56Zm12.842-15.268c0-.852.656-1.495 1.495-1.495s1.495.643 1.495 1.495-.68 1.494-1.495 1.494-1.495-.643-1.495-1.494Zm.271 15.268V9.359h2.446v11.864h-2.446ZM96.365 8.991c2.062 0 3.623.964 4.259 2.23h.07c-.024-.298-.047-.597-.047-1.127V9.359h2.244v17.153H94.17v-2.184h6.296v-4.093c0-.577.024-.852.068-1.173h-.09c-.497 1.173-1.992 2.137-3.964 2.137-3.33 0-5.819-2.552-5.819-6.095 0-3.543 2.4-6.118 5.707-6.118ZM93.15 15.085c0 2.277 1.584 3.91 3.715 3.91s3.716-1.657 3.716-3.91c0-2.254-1.561-3.911-3.716-3.911-2.154 0-3.715 1.634-3.715 3.911ZM106.24 21.223V3.977h2.446v5.382H116v11.864h-2.446V11.52h-4.868v9.704H106.24Z" />
                </g>
              </g>
              <defs>
                <clipPath id="a">
                  <rect width="116" height="26.512" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {/* pencil square svg code  */}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
            >
              <g id="heroicons-outline/pencil-square">
                <path
                  id="Vector"
                  d="M16.8617 4.74265L18.5492 3.05516C19.2814 2.32292 20.4686 2.32292 21.2008 3.05516C21.9331 3.78739 21.9331 4.97457 21.2008 5.70681L10.5822 16.3254C10.0535 16.8541 9.40144 17.2427 8.68489 17.4562L6 18.256L6.79978 15.5711C7.01323 14.8546 7.40185 14.2025 7.93052 13.6738L16.8617 4.74265ZM16.8617 4.74265L19.5 7.38097M18 14.256V19.006C18 20.2486 16.9926 21.256 15.75 21.256H5.25C4.00736 21.256 3 20.2486 3 19.006V8.50597C3 7.26333 4.00736 6.25597 5.25 6.25597H10"
                  stroke="#0F948B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </Box>
          <Divider sx={{ border: "1px solid #0F948B" }} />
          <HistoryList data={dummyData} />
        </Drawer>

        <Box
          className="container-fluid"
          component="main"
          sx={{ bgcolor: "#012926", height: "100vh" }}
        >
          <Toolbar />

          {advisery === "General" && <General />}
          {advisery === "Strategy" && <Strategy />}
          <ChatInput />
        </Box>
      </Box>
    </div>
  );
};
export default Sidebar;
