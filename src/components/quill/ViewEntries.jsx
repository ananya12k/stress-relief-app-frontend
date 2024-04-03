import * as React from "react";
import {
  Grid,
  Card,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const journalEntries = [
  {
    title: "Day 1: A New Beginning",
    date: "2024-04-01",
    excerpt: "Started my new journal...",
  },
  {
    title: "Day 2: Learning React",
    date: "2024-04-02",
    excerpt: "Building a UI with MUI...",
  },
];

function ViewEntries() {
  const [sortBy, setSortBy] = React.useState("date");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <Typography variant="h6" gutterBottom>
            Sort By:
          </Typography>
          <Select value={sortBy} onChange={handleSortChange}>
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="title">Title</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={8}>
        {journalEntries.map((entry) => (
          <Card key={entry.title}>
            <Grid container spacing={2} padding={2}>
              <Grid item xs={12}>
                <Typography variant="h6">{entry.title}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  {entry.date}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">{entry.excerpt}</Typography>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default ViewEntries;
