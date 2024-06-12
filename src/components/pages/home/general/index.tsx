import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import GeneralData from "./generalData";
const General: React.FC = () => {
  return (
    <div className="general">
      <Typography className="selectAdvisor" variant="h5" component="h5">
        Select your advisor
      </Typography>
      <Grid container rowSpacing={2} marginTop={3}>
        {GeneralData.map((value, index) => {
          return (
            <Grid key={`${value.title}_${index}`} item md={4} lg={4}>
              <Card className="generalCard">
                {value.icon}
                <Typography variant="body1" className="cardTitle" component="p">
                  {value.title}
                </Typography>
                <Typography variant="body1" className="cardText" component="p">
                  {value.text}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default General;
