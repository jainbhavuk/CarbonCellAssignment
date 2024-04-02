import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Autocomplete,
  Button,
  Stack,
  SvgIcon,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { CryptoContainer } from "../../containers/crypto";
import { PopulationChartContainer } from "../../containers/population";
import CarbonCellLogo from "../../assets/images/carbon-cell.png";
import { Link } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import { Search as ReactComponent } from "@mui/icons-material";
import HistoryIcon from "@mui/icons-material/History";
import WalletIcon from "@mui/icons-material/Wallet";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { useTheme } from "@mui/material";
import { useState } from "react";

const drawerWidth = 320;

export const AppLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (text: string) => {
    setActiveItem(text);
  };

  const drawer = (
    <Box p={1}>
      <Link href="/">
        <Box
          component="img"
          p={2}
          src={CarbonCellLogo}
          sx={{ objectFit: "cover" }}
        />
      </Link>
      <Autocomplete
        freeSolo
        disableClearable
        options={["Wallet", "Crypto Prices"].map((option) => option)}
        renderInput={(params) => (
          <TextField
            placeholder="Search"
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <SvgIcon component={ReactComponent} fontSize="large" />
              ),
            }}
          />
        )}
      />

      <List>
        {["Organization", "Home", "Assets", "Trade", "History"].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => handleListItemClick(text)}
              selected={activeItem === text}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <CorporateFareIcon />
                  ) : index === 1 ? (
                    <HomeIcon />
                  ) : index === 2 ? (
                    <WalletIcon />
                  ) : index === 3 ? (
                    <WebAssetIcon />
                  ) : index === 4 ? (
                    <HistoryIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box display="flex">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          color: "white",
          bgcolor: "black",
          boxShadow: "none",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: "flex",
          ml: { sm: `${drawerWidth}px` },
          zIndex: 999,
        }}
      >
        <Toolbar sx={{ zIndex: 999 }}>
          <Box display="flex" width="100%" justifyContent="space-between">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" fontWeight="700" noWrap component="div">
              Hello, Brooklyn Simmons!
            </Typography>
            {isMediumScreen && (
              <Button variant="contained" sx={{ justifySelf: "flex-end" }}>
                Start Trading
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          mt: 2,
          width: isSmallScreen ? "100%" : `calc(100vw - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        <Stack width="100%" gap={isSmallScreen ? 8 : 12} mt={2}>
          {isSmallScreen && (
            <Box
              alignSelf="center"
              mt={4}
              component="img"
              src={CarbonCellLogo}
              width={200}
              sx={{ objectFit: "cover" }}
            />
          )}
          <CryptoContainer />
          <PopulationChartContainer />
        </Stack>
      </Box>
    </Box>
  );
};
