import { Box, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";
import collapseData from "../sidebar/collapseData";
import { useNavigate } from "react-router-dom";
const SmallNavbar: React.FC = () => {
  const navigate = useNavigate();
  const [openCollap, setOpenCollap] = useState<boolean>(false);
  const [activeAdviseryName, setActiveAdviseryName] =
    useState<string>("General");
  const [activeAdvisery, SetActiveAdvisery] = useState<number>(2);

  const adviseryChange = (index: number, title: string) => {
    SetActiveAdvisery(index);
    setActiveAdviseryName(title);
    setOpenCollap(!openCollap);
  };

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
        onClick={() => {
          setOpenCollap(!openCollap);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10ZM2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
            fill="#0F948B"
          />
        </svg>
        <Typography component="p" className="adviseryName">
          {activeAdviseryName}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z"
              fill="#0F948B"
            />
          </svg>
        </Typography>

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
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Collapse
        sx={{
          width: "90%",
          marginTop: "10px",
          marginX: "auto",
          padding: 2,
          maxHeight: 230,
          border: "1px solid #15CC8F",
          borderRadius: 2,
          overflow: "auto",
          "& .MuiDrawer-paper": {
            width: "90%",
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
        {collapseData.map((value, index) => {
          return (
            <div
              onClick={() => {
                adviseryChange(index, value.title);
              }}
              className="d-flex gap-2 p-1 align-items-start smallCollapseDiv"
              key={`${value.title}_${index}`}
            >
              <div>{value.icon}</div>
              <section>
                <p>{value.title}</p>
                <small>{value.text}</small>
              </section>
              {activeAdvisery === index && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ position: "static", right: "70px" }}
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
    </Box>
  );
};

export default SmallNavbar;
