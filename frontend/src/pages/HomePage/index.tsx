import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import useStyles from "./styles";
import { Box, Grid, Typography, Zoom } from "@material-ui/core";
import Teppa from "../../assets/teppa.png";
import Tecnologies from "../../assets/tecnologies.jpg";
import Suport from "../../assets/suport.jpg";

function HomePage() {
  const classes = useStyles();
  const [Grow, setGrow] = useState(false);

  useEffect(() => {
    setGrow(true);
  }, []);

  return (
    <>
      <Box className={classes.box} />

      <Typography
        className={classes.text}
        variant="h1"
        color="primary"
        align="center"
        gutterBottom
      >
        Patient Control
      </Typography>
      <Box mt={7} />
      <Typography
        className={classes.text}
        variant="h2"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        Manage your patient's info above on the menu, more about us bellow.
      </Typography>
      <Box mt={7} />

      <Grid container spacing={2} justify="center">
        <Zoom in={Grow}>
          <Grid item xs={"auto"} sm={"auto"}>
            <Cards
              className={classes.cards}
              title="Software Planning and Creation"
              description="We use the method of ideation and planning of software projects necessary for you to make your..."
              img={Teppa}
              link="https://teppadev.com.br/"
            />
          </Grid>
        </Zoom>
        <Zoom in={Grow} style={{ transitionDelay: Grow ? "500ms" : "0ms" }}>
          <Grid item xs={"auto"} sm={"auto"}>
            <Cards
              className={classes.cards}
              title="Technologies and Applications"
              description="
              FRONTEND • REACT.JS - NEXT.JS         
              CLOUD • GOOGLE CLOUD - AWS"
              img={Tecnologies}
              link="https://teppadev.com.br/"
            />
          </Grid>
        </Zoom>
        <Zoom in={Grow} style={{ transitionDelay: Grow ? "1000ms" : "0ms" }}>
          <Grid item xs={"auto"} sm={"auto"}>
            <Cards
              className={classes.cards}
              title="Suporte e Sustenance"
              description="Count on Teppa for the development of adjustments, improvements or new scopes for your software solution..."
              img={Suport}
              link="https://teppadev.com.br/"
            />
          </Grid>
        </Zoom>
      </Grid>
    </>
  );
}

export default HomePage;
