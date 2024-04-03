import { Grid, Typography } from "@mui/material";

const PageTitle = ({ title, subtitle }) => {
  return (
    <Grid item xs={12} sm={4} className="text-center text-md-left mb-sm-0">
      <Typography variant="subtitle1" className="text-uppercase page-subtitle">
        {subtitle}
      </Typography>
      <Typography variant="h3" className="page-title">
        {title}
      </Typography>
    </Grid>
  );
};

export default PageTitle;
