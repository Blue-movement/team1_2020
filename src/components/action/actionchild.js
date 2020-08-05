import React from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import WebIcon from "@material-ui/icons/Web";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  statereps: {
    height: theme.spacing(15),
    weight: theme.spacing(15),
    padding: theme.spacing(5),
    minHeight: "50vh",
  },
  social: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  grid: {
    padding: theme.spacing(5),
  },
}));

const ActionChild = (props) => {
  function openInNewTab(url) {
    window.open(url, "_blank");
  }

  const classes = useStyles();
  return (
    <Grid item xs>
      <div className={classes.statereps}>
        <Paper className={classes.paper}>
          <div className={classes.avatar}>
            <Avatar>M</Avatar>
          </div>
          <h3>{props.title}</h3>
          <h4>{props.figure.name}</h4>
          <h5>Phone: {props.figure.phone}</h5>
          <div className={classes.social}>
            <IconButton
              onClick={() =>
                openInNewTab(
                  "http://twitter.com/" + props.figure.channels[1].id
                )
              }
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                openInNewTab(
                  "http://facebook.com/" + props.figure.channels[0].id
                )
              }
            >
              <FacebookIcon />
            </IconButton>
            <IconButton onClick={() => openInNewTab(props.figure.urls[0])}>
              <WebIcon />
            </IconButton>
          </div>
        </Paper>
      </div>
    </Grid>
  );
};

export default ActionChild;
