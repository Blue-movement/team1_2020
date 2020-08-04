import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import CustomizedInputBase from "./searchbar";
import Geocode from "react-geocode";

const axiosOpenStatesGraphQL = axios.create({
  baseURL: "https://openstates.org/graphql/",
  headers: {
    "X-API-KEY": "ef262b58-a305-4bba-8cc5-764a9ced1405",
  },
});

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  parent: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  statereps: {
    height: theme.spacing(50),
    weight: theme.spacing(50),
  },
});

export class Action extends Component {
  constructor() {
    super();

    this.state = {
      address: null,
      lati: null,
      logi: null,
      longaddy: null,
    };
  }

  componentDidMount() {
    Geocode.setApiKey("AIzaSyACD21gEm0jdeRklb6qo4O31k39x9brz8U");
    Geocode.setLanguage("en");
    Geocode.enableDebug();
  }

  onSubmit = (event) => {
    event.preventDefault();
    Geocode.fromAddress(this.state.address)
      .then((response) => {
        if (response.status === "OK") {
          const { lat, lng } = response.results[0].geometry.location;
          this.setState(
            {
              lati: lat,
              logi: lng,
              longaddy: response.results[0].formatted_address,
            },
            () => {
              this.onFetchFromOpenStates();
              this.fetchCivicInfo();
            }
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async fetchCivicInfo() {
    fetch(
      "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyD9MzWFIJ0TltXFjxRbZ38N5dRgTCxJKzE&address=" +
        this.state.longaddy
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  async onFetchFromOpenStates() {
    let lat = this.state.lati;
    let lng = this.state.logi;
    let GET_QUERY = `
    query ($lat: Float, $lng: Float)
    {
      people(latitude: $lat , longitude: $lng, first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
  `;

    return new Promise((resolve, reject) => {
      axiosOpenStatesGraphQL
        .post("", { query: GET_QUERY, variables: { lat, lng } })
        .then((result) => {
          console.log(result);
          resolve(true);
          return result;
        })
        .catch((e) => {
          console.error(e);
          reject(true);
          throw e;
        });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parent}>
        <Container>
          <h1>Find Your Representative</h1>
          <h2>Please Type In Your Address</h2>
          <form onSubmit={this.onSubmit}>
            <CustomizedInputBase
              type="text"
              name="address"
              value={this.state.address || ""}
              onChange={(event) =>
                this.setState({ address: event.target.value })
              }
            />
            <div>
              {this.state.lat ? (
                <div>
                  <h1>You've Got Mail</h1>
                </div>
              ) : (
                <div>
                  <h1>Try Again</h1>
                </div>
              )}
            </div>
            <div>
              <Button onSubmit={this.onSubmit}>Submit</Button>
            </div>
          </form>
          <Grid container spacing={3}>
            <Grid item xs>
              <div className={classes.statereps}>
                <Paper className={classes.paper}>xs</Paper>
              </div>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Action);
