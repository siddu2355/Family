import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Family from "./components/family";
import MemberDetails from "./components/memberDetails";
import Images from "./components/images";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";
import Main from "./components/main";
import LogOut from "./components/logout";
import Home from "./components/home";
import Profile from "./components/profile";
class App extends Component {
  state = {};
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <NavBar user={user} />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/home" component={Main} />
          <Route path="/family" component={Family} />
          <Route path="/profile" component={Profile} />
          <Route path="/images" component={Images} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/log-out" component={LogOut} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
