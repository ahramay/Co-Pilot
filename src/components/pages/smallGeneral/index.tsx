import { Box, Grid, Typography } from "@mui/material";
import GeneralData from "../general/generalData";
import { useDispatch } from "react-redux";
import React from "react";
import { setAdvisery } from "../../../redux/slice/adviserySlice";

const SmallGeneral: React.FC = () => {
  const dispatch = useDispatch();
  const handleChangeAdvisery = (title: string) => {
    dispatch(setAdvisery(title));
  };

  return (
    <Box
      component={"div"}
      className="smallGeneral"
      sx={{ height: "440px", overflow: "auto" }}
    >
      <Typography
        component="p"
        sx={{
          textAlign: "center",
          marginY: 2,
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        Select your advisor
      </Typography>
      <Grid container rowSpacing={2}>
        {GeneralData.map((value, index) => {
          return (
            <Grid key={`${value.title}_${index}`} item xs={6}>
              <Box
                onClick={() => {
                  handleChangeAdvisery(value.title);
                }}
                width={"95%"}
                height={90}
                sx={{
                  border: "1px solid #0F948B",
                  padding: 1,
                  borderRadius: 2,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#0f948b",
                  },
                }}
                component="section"
              >
                {value.icon}
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    marginY: 2,
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  {value.title}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SmallGeneral;
