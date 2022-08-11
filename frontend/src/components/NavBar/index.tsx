import React from "react";
import {
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  useMediaQuery,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { lightBlue } from "@material-ui/core/colors";
import useStyles from "./styles";
const Crown = require("../../assets/crown.png");

const ITEM_HEIGHT = 48;

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down(1023));
  const isMobile = useMediaQuery(theme.breakpoints.down(426));

  const [anchorEl, setAnchorEl] = React.useState<EventTarget | null>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<EventTarget | null>(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const MenuItens = [
    {
      id: 1,
      href: "/",
      title: "Home",
    },
    {
      id: 2,
      href: "https://teppadevchallenge.web.app/patients",
      title: "Patients",
    },
    {
      id: 3,
      href: "https://teppadevchallenge.web.app/insert",
      title: "Insert",
    },
  ];

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {isMobile ? (
            <>
              <Link href="">
                <img src={Crown} alt="logo" />
              </Link>
              <Container className={classes.containerButtons}>
                <IconButton
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon
                    className={classes.VertIcon}
                    style={{ fontSize: 30 }}
                  />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={
                    anchorEl as
                      | Element
                      | ((element: Element) => Element)
                      | null
                      | undefined
                  }
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "50ch",
                      background: "black",
                    },
                  }}
                >
                  {MenuItens.map((row) => (
                    <div key={row.id}>
                      <MenuItem onClick={handleClose}>
                        <Link
                          href={row.href}
                          className={classes.text}
                          underline="none"
                        >
                          {row.title}
                        </Link>
                      </MenuItem>
                    </div>
                  ))}
                </Menu>
                <IconButton
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick2}
                >
                  <MoreVertIcon
                    className={classes.VertIcon}
                    style={{ fontSize: 22 }}
                  />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={
                    anchorEl2 as
                      | Element
                      | ((element: Element) => Element)
                      | null
                      | undefined
                  }
                  keepMounted
                  open={open2}
                  onClose={handleClose2}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                      background: "black",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose2}>
                    <IconButton
                      className={classes.IconButton}
                      href="https://www.facebook.com/guilherme.eduardo28/"
                      target="_blank"
                      rel="noopener"
                      color="primary"
                      aria-label="facebook"
                    >
                      <FacebookIcon />
                    </IconButton>
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <IconButton
                      className={classes.IconButton}
                      href="https://www.instagram.com/guilherme.eduardo28/"
                      target="_blank"
                      rel="noopener"
                      color="secondary"
                      aria-label="instagram"
                    >
                      <InstagramIcon />
                    </IconButton>
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <IconButton
                      className={classes.IconButton}
                      href="https://www.linkedin.com/in/guilherme-romualdo-290641152/"
                      target="_blank"
                      rel="noopener"
                      color="inherit"
                      aria-label="linkedin"
                      style={{ color: lightBlue[500] }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </MenuItem>
                </Menu>
              </Container>
            </>
          ) : (
            <>
              {isMatch ? (
                <>
                  <Link href="">
                    <img src={Crown} alt="Crown" />
                  </Link>
                  <Container className={classes.containerButtons}>
                    {MenuItens.map((row) => (
                      <Box key={row.id} m={2} pt={3}>
                        <Link
                          href={row.href}
                          className={classes.text}
                          underline="none"
                        >
                          {row.title}
                        </Link>
                      </Box>
                    ))}
                  </Container>
                  <IconButton
                    color="primary"
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon
                      className={classes.VertIcon}
                      style={{ fontSize: 30 }}
                    />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={
                      anchorEl as
                        | Element
                        | ((element: Element) => Element)
                        | null
                        | undefined
                    }
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                        background: "black",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <IconButton
                        className={classes.IconButton}
                        href="https://www.facebook.com/guilherme.eduardo28/"
                        target="_blank"
                        rel="noopener"
                        color="primary"
                        aria-label="facebook"
                      >
                        <FacebookIcon />
                      </IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IconButton
                        className={classes.IconButton}
                        href="https://www.instagram.com/guilherme.eduardo28/"
                        target="_blank"
                        rel="noopener"
                        color="secondary"
                        aria-label="instagram"
                      >
                        <InstagramIcon />
                      </IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IconButton
                        className={classes.IconButton}
                        href="https://www.linkedin.com/in/guilherme-romualdo-290641152/"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                        aria-label="linkedin"
                        style={{
                          color: lightBlue[500],
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </MenuItem>
                  </Menu>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <Link href="">
                    <img src={Crown} alt="logo" />
                  </Link>
                  <Container className={classes.containerButtons}>
                    {MenuItens.map((row) => (
                      <Box m={2} pt={3} key={row.id}>
                        <Link
                          href={row.href}
                          className={classes.text}
                          underline="none"
                        >
                          {row.title}
                        </Link>
                      </Box>
                    ))}
                  </Container>
                  <Container className={classes.container}>
                    <IconButton
                      className={classes.IconButton}
                      href="https://www.facebook.com/guilherme.eduardo28/"
                      target="_blank"
                      rel="noopener"
                      color="primary"
                      aria-label="facebook"
                    >
                      <FacebookIcon />
                    </IconButton>

                    <IconButton
                      className={classes.IconButton}
                      href="https://www.instagram.com/guilherme.eduardo28/"
                      target="_blank"
                      rel="noopener"
                      color="secondary"
                      aria-label="instagram"
                    >
                      <InstagramIcon />
                    </IconButton>

                    <IconButton
                      className={classes.IconButton}
                      href="https://www.linkedin.com/in/guilherme-romualdo-290641152/"
                      target="_blank"
                      rel="noopener"
                      color="inherit"
                      aria-label="linkedin"
                      style={{ color: lightBlue[500] }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Container>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
