import { Box, Collapse, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import collapseData from "../sidebar/collapseData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import Icons here
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { setAdvisery } from "../../../redux/slice/adviserySlice";
import { RootState } from "../../../redux";

const SmallNavbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openCollap, setOpenCollap] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const advisery = useSelector(
    (state: RootState) => state.advisery.selectedAdvisery
  );

  const handleDrawer = () => {
    setOpenCollap(false);
    setOpenDrawer(!openDrawer);
  };

  const adviseryChange = (title: string) => {
    dispatch(setAdvisery(title));
    setOpenCollap(!openCollap);
  };

  const dummyData: { date: string; msg: string[] }[] = [
    {
      date: "Today",
      msg: [
        " Lorem ipsum dolor sit amet consectetur adipiscing",
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

  return (
    <Box component="div" className="smallNavbar">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 1,
          borderBottom: "1px solid #0f948b",
        }}
      >
        {!openDrawer ? (
          <svg
            onClick={handleDrawer}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            cursor="pointer"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10ZM2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
              fill="#0F948B"
            />
          </svg>
        ) : (
          <svg
            onClick={handleDrawer}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            cursor="pointer"
          >
            <path
              d="M15.75 19.5L8.25 12L15.75 4.5"
              stroke="#0F948B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        {!openDrawer ? (
          <Typography
            component="p"
            className="adviseryName"
            onClick={() => {
              setOpenCollap(!openCollap);
            }}
          >
            {advisery}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
              className="mb-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z"
                fill="#0F948B"
              />
            </svg>
          </Typography>
        ) : (
          <Typography component="p" className="adviseryName">
            History
          </Typography>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/chat");
          }}
        >
          <path
            d="M13.5 6H5.25C4.00736 6 3 7.00736 3 8.25V18.75C3 19.9926 4.00736 21 5.25 21H15.75C16.9926 21 18 19.9926 18 18.75V10.5M7.5 16.5L21 3M21 3L15.75 3M21 3V8.25"
            stroke="#0F948B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Collapse
        sx={{
          overflow: "auto",
          width: "100%",
          position: "absolute",
          backgroundColor: "#012926",
          left: 0,
          right: 0,
          marginX: "auto",
          padding: 2,
          maxHeight: 490,
          zIndex: 1300,
          borderRadius: "0px 0px 20px 20px",
          "& .MuiDrawer-paper": {
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
        in={openCollap}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            margin: "10px",
          }}
          component={"p"}
        >
          Select Advisor
        </Typography>
        {collapseData.map((value, index) => (
          <div
            onClick={() => adviseryChange(value.title)}
            className="d-flex gap-2 p-1 align-items-start smallCollapseDiv"
            key={`${value.title}_${index}`}
          >
            <div>{value.icon}</div>
            <section>
              <p>{value.title}</p>
              <small>{value.text}</small>
            </section>
            {advisery === value.title && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{ position: "static", right: "70px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.8566 8.19113C14.1002 7.85614 14.0261 7.38708 13.6911 7.14345C13.3561 6.89982 12.8871 6.97388 12.6434 7.30887L9.15969 12.099L7.28033 10.2197C6.98744 9.92678 6.51256 9.92678 6.21967 10.2197C5.92678 10.5126 5.92678 10.9874 6.21967 11.2803L8.71967 13.7803C8.87477 13.9354 9.08999 14.0149 9.30867 13.9977C9.52734 13.9805 9.72754 13.8685 9.85655 13.6911L13.8566 8.19113Z"
                  fill="#15CC8F"
                />
              </svg>
            )}
          </div>
        ))}
      </Collapse>
      <Box
        sx={{
          position: "absolute",
          top: 58,
          left: 0,
          right: 0,
          bottom: 0,
          marginTop: 0,
          overflowY: "auto",
          overflowX: "hidden",
          visibility: !openDrawer ? "hidden" : "visible",
        }}
      >
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              position: "absolute",
              width: "100%",
              height: "100%",
              margin: "auto",
              padding: 2,
              borderRadius: 4,
              backgroundColor: "#012926",
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
          variant="persistent"
          anchor="left"
          open={openDrawer}
        >
          {dummyData.map((value, index) => {
            return (
              <div key={`${value.date}_${index}`} className="smallhistoryList">
                <div className="my-3" key={`${value.date}_${index}`}>
                  <small className="pastTime">{value.date}</small>
                  {value.msg.map((msg, index) => {
                    return (
                      <section
                        key={`msgDiv_${index}`}
                        className="historySection"
                      >
                        <DeleteOutlineOutlinedIcon className="delIcon" />
                        <p className="historyText">{msg}</p>
                      </section>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Drawer>
      </Box>
    </Box>
  );
};

export default SmallNavbar;
