import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import CustomizedInputBase from "./searchbar";
import Geocode from "react-geocode";
import ActionChild from "./actionchild";
import SimpleTable from "./table";

const axiosOpenStatesGraphQL = axios.create({
  baseURL: "https://openstates.org/graphql/",
  headers: {
    "X-API-KEY": process.env.REACT_APP_OPENSTATES_API_KEY,
  },
});

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    padding: theme.spacing(4),
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  parent: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  column: {
    padding: theme.spacing(10),
  },
  row: {
    paddingTop: theme.spacing(10),
  },
});

export class Action extends Component {
  constructor() {
    super();

    this.state = {
      address: null,
      bills: null,
      usstate: null,
      lati: null,
      logi: null,
      longaddy: null,
      fedrep: null,
      staterep: null,
      statesen: null,
      fedsen1: null,
      fedsen2: null,
      gov: null,
      ltgov: null,
      isready: false,
      isready1: false,
    };
  }

  componentDidMount() {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOCODE_API_KEY);
    Geocode.setLanguage("en");
    Geocode.enableDebug();
  }

  onSubmit = (event) => {
    event.preventDefault();
    Geocode.fromAddress(this.state.address)
      .then((response) => {
        if (response.status === "OK") {
          const { lat, lng } = response.results[0].geometry.location;
          let state = response.results[0].address_components.filter(
            component => component.types && component.types.includes("administrative_area_level_1")
          )[0].long_name
          this.setState(
            {
              lati: lat,
              logi: lng,
              longaddy: response.results[0].formatted_address,
              usstate: state,
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
      .then((data) => {
        this.setState({
          staterep: data.officials[7],
          statesen: data.officials[8],
          fedrep: data.officials[4],
          fedsen1: data.officials[2],
          fedsen2: data.officials[3],
          gov: data.officials[5],
          ltgov: data.officials[6],
          isready: true,
        });
      });
  }

  async onFetchFromOpenStates() {
    let juris = this.state.usstate;
    let GET_QUERY = ` query($juris: String)   {
      search_1: bills(first: 5, jurisdiction: $juris) {
        edges {
          node {
            id
            identifier
            title
            classification
            updatedAt
            createdAt
            legislativeSession {
              identifier
              jurisdiction {
                name
              }
            }
            actions {
              date
              description
              classification
            }
            documents {
              date
              note
              links {
                url
              }
            }
            versions {
              date
              note
              links {
                url
              }
            }
            sources {
              url
              note
                
            }
          }
        }
      }
    }`;

    return new Promise((resolve, reject) => {
      axiosOpenStatesGraphQL
        .post("", { query: GET_QUERY, variables: { juris } })
        .then((result) => {
          this.setState({
            bills: result.data.data.search_1.edges,
            isready1: true,
          });
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
          <h1>Find Your Representatives</h1>
          <h2>Please Type In Your Address</h2>
          <div className={classes.search}>
            <form onSubmit={this.onSubmit}>
              <CustomizedInputBase
                type="text"
                name="address"
                value={this.state.address || ""}
                onChange={(event) =>
                  this.setState({ address: event.target.value })
                }
              />
            </form>
          </div>
          {this.state.isready && (
            <div>
              <Grid container spacing={4}>
                <ActionChild
                  figure={this.state.fedrep}
                  title={"Federal Representative"}
                />
                <ActionChild
                  figure={this.state.fedsen1}
                  title={"Federal Senator"}
                />
                <ActionChild
                  figure={this.state.fedsen2}
                  title={"Federal Senator"}
                />
                <ActionChild
                  figure={this.state.staterep}
                  title={"State Representative"}
                />
              </Grid>
              <Grid container spacing={3}>
                <ActionChild
                  figure={this.state.statesen}
                  title={"State Senator"}
                />
                <ActionChild figure={this.state.gov} title={"Governor"} />
                <ActionChild figure={this.state.ltgov} title={"Lt. Governor"} />
              </Grid>
            </div>
          )}
          {this.state.isready1 && <SimpleTable bills={this.state.bills} />}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Action);
