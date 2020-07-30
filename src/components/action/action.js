/* global gapi */
import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import Actionchild from "./actionchild";
//import { useQuery, useSubscription } from "urql";
import axios from "axios";
import CustomizedInputBase from "./searchbar";
import Geocode from "react-geocode";
//import gql from "graphql-tag";
//import { gapi } from "gapi-script";

const axiosOpenStatesGraphQL = axios.create({
  baseURL: "https://openstates.org/graphql/",
  headers: {
    "X-API-KEY": "ef262b58-a305-4bba-8cc5-764a9ced1405",
  },
});

export class Action extends Component {
  state = {
    address: null,
    lati: null,
    logi: null,
    longaddy: null,
  };

  componentDidMount() {
    // this.onFetchFromOpenStates();
    console.log("mounted");
    Geocode.setApiKey("AIzaSyACD21gEm0jdeRklb6qo4O31k39x9brz8U");
    Geocode.setLanguage("en");
    Geocode.enableDebug();
  }

  // onChange = (event) => {
  //   console.log("called");
  // };

  onSubmit = (event) => {
    event.preventDefault();
    this.onFetchFromGeocode()
      .then((result) => {
        console.log(result);
        this.onFetchFromOpenStates();
      })
      .then((result) => {
        console.log(result);
        this.load();
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
  };

  async onLookup(address) {
    var req = window.gapi.client.request({
      path: "/civicinfo/v2/voterinfo/representatives",
      params: { address: address },
    });
    req.execute(function (response) {
      console.log(response);
    });
  }

  async load() {
    console.log(window.gapi.client);
    window.gapi.client.setApiKey("AIzaSyD9MzWFIJ0TltXFjxRbZ38N5dRgTCxJKzE");
    this.onLookup(this.state.longaddy);
  }

  onFetchFromGeocode = () => {
    return new Promise((resolve, reject) => {
      Geocode.fromAddress(this.state.address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          const { addy } = response.results[0].formatted_address;
          this.setState({
            lati: lat,
            logi: lng,
            longaddy: addy,
          });
          resolve(true);
        },
        (error) => {
          console.error(error);
          reject(true);
        }
      );
    });
  };

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

  // async onFetchFromCivicInformation() {
  //   const authClient = await auth.getClient();
  //   google.options({ auth: authClient });
  //   const civics = google.civicinfo({
  //     version: "v2",
  //   });
  //   const res = await civics.representatives.representativeInfoByAddress({
  //     address: this.state.address,
  //     includeOffices: true,
  //   });
  //   console.log(res);
  //   console.log("called");
  // }

  render() {
    // const [result] = useQuery({ query: FEED_QUERY });
    // const { data, fetching, error } = result;

    // if (fetching) return <div>Fetching</div>;
    // if (error) return <div>Error</div>;

    // const infotorender = data.feed.info;
    const { address } = this.state;
    return (
      <div>
        <Container>
          <h1 style={{ textAlign: "center" }}>Action Page</h1>
          Citizens dashboard that allows users to see all their representatives,
          budgets, pending legislation at the national, state, county and city
          level <br />
          Users will be able to see the funding for programs <br />
          Users will be able to contact their representatives easily <br />
          Users will be able to see polling locations for primaries, general
          elections and run-offs <br />
          {/* <div>
            {infotorender.map((info) => (
              <Actionchild val={info} />
            ))}
          </div> */}
          <form onSubmit={this.onSubmit.bind(this)}>
            <CustomizedInputBase
              type="text"
              name="address"
              value={address}
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
        </Container>
      </div>
    );
  }
}

export default Action;
