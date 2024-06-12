import React from "react";
import { Divider, Typography } from "@mui/material";
import { HistoryListProps } from "../../../interface/historyList";

// import Icons here
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const HistoryList: React.FC<{ data: { date: string; msg: string[] }[] }> = ({
  data,
}) => {
  return (
    <div className="historyList">
      {data.map((value, index) => {
        return (
          <div className="my-3" key={`${value.date}_${index}`}>
            <small className="pastTime">{value.date}</small>
            {value.msg.map((msg, index) => {
              return (
                <section key={`msgDiv_${index}`} className="historySection">
                  <DeleteOutlineOutlinedIcon
                    sx={{
                      fontSize: "20px",
                      display: "flex",
                      cursor: "pointer",
                      color: "#013b37",
                      position: "relative",
                      top: "15px",
                      left: "190px",
                      zIndex: 12,
                      backgroundColor: "transparent !important",
                    }}
                  />
                  <p className="historyText">{msg}</p>
                </section>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HistoryList;
