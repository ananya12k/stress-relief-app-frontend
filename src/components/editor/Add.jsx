import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Ckeditor from "react-ckeditor-component/lib/ckeditor";
import PageTitle from "../../../src/components/PageTitle";

export default function Add() {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState(null);
  const history = useNavigate();

  function onChange(evt) {
    var newContent = evt.editor.getData();
    setNotes(newContent);
  }

  function onBlur(evt) {}

  function afterPaste(evt) {
    var newContent = evt.editor.getData();
    setNotes(newContent);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let arr = [];
    if (
      localStorage.getItem("order_data") !== null &&
      localStorage.getItem("order_data")
    ) {
      arr = JSON.parse(localStorage.getItem("order_data"));
    }
    arr.push({ name: name, notes: notes });
    localStorage.setItem("order_data", JSON.stringify(arr));
    history.push("/");
  }

  function goBack() {
    history.push("/diary");
  }

  return (
    <Container fluid className="main-content-container px-4">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <PageTitle title="Add Order" />
        </Grid>
        <Grid item xs={12}>
          <Card className="mb-4">
            <form onSubmit={handleSubmit}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Content
                  </Typography>
                  <Ckeditor
                    activeClass="p10"
                    content={notes}
                    events={{
                      blur: (e) => onBlur(e),
                      afterPaste: (e) => afterPaste(e),
                      change: (e) => onChange(e),
                    }}
                    required={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => goBack()}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
