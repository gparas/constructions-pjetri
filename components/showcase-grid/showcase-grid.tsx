import React from "react";
import Grid from "@mui/material/Grid2";

interface Props {
  items: React.ReactNode[];
}

const ShowcaseGrid = ({ items }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>{items[0]}</Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grid container spacing={2} mb={2}>
          <Grid size={"grow"}>{items[1]}</Grid>
          <Grid size={"grow"}>{items[2]}</Grid>
        </Grid>
        {items[3]}
      </Grid>
    </Grid>
  );
};

export default ShowcaseGrid;
