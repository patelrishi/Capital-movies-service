import React, { Component } from "react";
import { connect } from "react-redux";
import Signin from "../components/userAuth/Signin";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/styles";
import Signup from "../components/userAuth/signup";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";

const styles = (theme) => ({
  root: {
    height: "fit-content",
    background: `url(${process.env.PUBLIC_URL}/png/background.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "calc(100vh - 72px)",
    overflow: "auto",
    "&>div": {
      "&:nth-child(2)": {
        background: "rgba(0,0,0,0.7)",
        height: "100%",
        minHeight: "calc(100vh - 72px)",
        paddingTop: 74,
      },
    },
  },
});
export class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "login",
    };
  }
  setCurrentTab = (value) => {
    this.setState({
      currentTab: value,
    });
  };

  componentDidMount() {
    const { history } = this.props;
    if (
      window.location.pathname.split("/").at(-1) !== "login" &&
      this.state.currentTab === "login"
    ) {
      history.replace(`auth/login`);
    }
    if (
      window.location.pathname.split("/").at(-1) !== "signup" &&
      this.state.currentTab === "signup"
    ) {
      history.replace(`auth/signup`);
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid className={classes.root}>
          <NavBar />
          <Grid item xs={12}>
            {this.state.currentTab === "login" ? (
              <Signin
                setCurrentTab={this.setCurrentTab}
                currentTab={this.state.currentTab}
              />
            ) : (
              <Signup
                setCurrentTab={this.setCurrentTab}
                currentTab={this.state.currentTab}
              />
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserAuth))
);
