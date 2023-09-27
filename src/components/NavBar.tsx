import React, { useContext } from "react";
import { Context } from "..";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          {user.getIsAuth() ? (
            <Box className="ml-auto">
              <Button
                variant="contained"
                //onClick={() => navigate(ADMIN_ROUTE)}
              >
                Админ панель
              </Button>

              <Button variant="contained">Выйти</Button>
            </Box>
          ) : (
            <Box className="ml-auto">
              <Button variant="contained" onClick={() => user.setIsAuth(true)}>
                Авторизация
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default NavBar;
