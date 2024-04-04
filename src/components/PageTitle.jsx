import { Grid, Typography } from "@mui/material";

const PageTitle = ({ title }) => {
  return (
    <Grid item xs={12} sm={4} className="text-center text-md-left mb-sm-0">
      <Typography variant="h3" className="page-title">
        {title}
      </Typography>
    </Grid>
  );
};

export default PageTitle;
