import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useNavigate } from "react-router-dom";
const List = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("order_data"))
  );
  const navigate = useNavigate(); // Use useNavigate hook correctly

  let arr = [];
  if (
    localStorage.getItem("order_data") !== null &&
    localStorage.getItem("order_data")
  ) {
    arr = JSON.parse(localStorage.getItem("order_data"));
  }

  function deleteOrder(id) {
    if (window.confirm("Are you sure you want to delete this order?")) {
      arr.splice(id, 1);
      localStorage.removeItem("order_data");
      localStorage.setItem("order_data", JSON.stringify(arr));
      setData(JSON.parse(localStorage.getItem("order_data")));
    }
  }
  function editOrder(id) {
    navigate("/order/edit/" + (id + 1)); // Use navigate function correctly
  }
  return (
    <Container maxWidth="lg" className="main-content-container px-4">
      <div className="app-container notification">
        <ReactNotification />
      </div>
      {/* Page Header */}
      <Grid container justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/diary/add"
        >
          Add
        </Button>
      </Grid>

      {/* Default Light Table */}
      <Grid container>
        <Grid item xs={12}>
          <Paper className="mb-4">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data && data.length > 0 ? (
                    data.map((item, key) => (
                      <TableRow key={key}>
                        <TableCell>{key + 1}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>
                          {item.notes ? ReactHtmlParser(item.notes) : "N/A"}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => editOrder(key)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => deleteOrder(key)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        No data available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default List;
