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
import ReactHtmlParser from "html-react-parser";
import { useNavigate } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const List = () => {
  const [data, setData] = useState(() => {
    try {
      const localStorageData = localStorage.getItem("order_data");
      return localStorageData ? JSON.parse(localStorageData) : [];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  });
  const navigate = useNavigate(); // Use useNavigate hook

  function deleteOrder(id) {
    if (window.confirm("Are you sure you want to delete this order?")) {
      let newData = [...data];
      newData.splice(id, 1);
      localStorage.setItem("order_data", JSON.stringify(newData));
      setData(newData);
    }
  }

  function editOrder(id) {
    navigate(`/order/edit/${id + 1}`); // Use navigate for redirection
  }

  return (
    <Container maxWidth="lg" className="main-content-container px-4">
      <div className="app-container notification">
        <ReactNotification /> {/* Render the component here */}
      </div>
      {/* Page Header */}
      <Grid container justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/diary/add")} // Use navigate for redirection
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
                  {data.length > 0 ? (
                    data.map((item, key) => (
                      <TableRow key={key}>
                        <TableCell>{key + 1}</TableCell>
                        <TableCell>{item.name}</TableCell>
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
