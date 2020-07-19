import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Actionchild from "./actionchild";
import { useQuery, useSubscription } from "urql";
import gql from "graphql-tag";

const FEED_QUERY = gql`
  {
    people(first: 3) {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export class Action extends Component {
  render() {
    const [result] = useQuery({ query: FEED_QUERY });
    const { data, fetching, error } = result;

    if (fetching) return <div>Fetching</div>;
    if (error) return <div>Error</div>;

    const infotorender = data.feed.info;
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
          <div>
            {infotorender.map((info) => (
              <Actionchild val={info} />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Action;
