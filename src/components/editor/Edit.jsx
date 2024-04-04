import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../NavBar";

export default function Edit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("order_data")) || [];
    const order = orderData[id];
    if (order) {
      setName(order.name);
      setNotes(order.notes);
    }
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    const orderData = JSON.parse(localStorage.getItem("order_data")) || [];
    orderData[id] = { name, notes };
    localStorage.setItem("order_data", JSON.stringify(orderData));
    history.push("/diary");
  }

  function goBack() {
    history.push("/diary");
  }

  return (
    <Container fluid className="main-content-container px-4">
      <Navbar />
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" className="page-title">
            Edit Order
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card className="mb-4">
            <form onSubmit={handleSubmit}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12}>
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
                  <TextField
                    fullWidth
                    label="Content"
                    variant="outlined"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Update
                  </Button>
                  <Button variant="contained" color="error" onClick={goBack}>
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
