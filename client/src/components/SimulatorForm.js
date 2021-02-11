import React, { useState, Component } from "react";
import {
  Container,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Léna Clavier &amp; Valentine Lav
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  selectEmpty: {
    /* marginTop: spacing(2), */
  },
  paper: {
    /* marginTop: spacing(8), */
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    /* margin: spacing(1), */
    /* backgroundColor: palette.secondary.main, */
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    /* marginTop: spacing(3), */
  },
  submit: {
    /* margin: spacing(3, 0, 2), */
  },
});

export default class SimulatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthYear: "",
      ageWork: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios
      .get("http://localhost:9000/simulator", {
        params: {
          birthYear: this.state.birthYear,
          ageWork: this.state.ageWork,
        },
      })
      .then((res) => {
        this.setState({ age: res.data.count });
        console.log("test", this.state.age);
        console.log("succes", res.data);
      })
      .catch((e) => {
        console.error("error", e);
      });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="">
          <br />
          <br />
          <Typography component="h1" variant="h5">
            Simulateur de retraite
          </Typography>
          <Typography component="p">
            Savoir à quel âge on peut partir avec une retraite à taux plein
            (avec une carrière continue)
          </Typography>
          <br />
          <br />
          <form onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  name="birthYear"
                  label="Année de naissance"
                  id="birthYear"
                  variant="outlined"
                  placeholder="AAAA"
                  value={this.state.birthYear}
                  onChange={this.handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="ageWork"
                  label="Âge d'entrée dans la vie active"
                  id="ageWork"
                  variant="outlined"
                  placeholder=""
                  value={this.state.ageWork}
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Calculer mon âge de retraite
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <br />
        <br />
        <div>
          <Typography component="p">
            {this.state.age
              ? "Votre âge de retraite à taux plein est " + this.state.age
              : ""}
          </Typography>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
