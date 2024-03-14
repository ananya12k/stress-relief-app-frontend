import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListIcon from "@mui/icons-material/List";
import { ListItemButton } from "@mui/material";
import QuillEditor from "./quill/QuillEditor";
import QuillAppBar from "./quill/QuillAppBar";
import QuillMain from "./quill/QuillMain";
import QuillDrawerHeader from "./quill/QuillDrawerHeader";
import { drawerWidth } from "../utils/constants";

export default function DiarySideNavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <QuillAppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit" href="/">
              <HomeIcon />
            </IconButton>
          </div>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textAlign: "center", flex: 1 }}
          >
            Persistent drawer
          </Typography>
        </Toolbar>
      </QuillAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <QuillDrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </QuillDrawerHeader>
        <Divider />
        <List>
          {/* New Entry */}
          <ListItemButton key="New Entry">
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="New Entry" />
          </ListItemButton>

          {/* View All Entries */}
          <ListItemButton key="View All Entries">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="View All Entries" />
          </ListItemButton>
        </List>
      </Drawer>
      <QuillMain open={open}>
        <QuillDrawerHeader />
        {/* <TextEditor /> */}
        <QuillEditor />
      </QuillMain>
    </Box>
  );
}
