import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Route } from "../utils/config";
import logo from "../assets/images/logoNoBkg.png";
import axios from "axios";

class RegisterPage extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: null,
      Password: null,
      login: false,
      store: null,
      error: "",
    };
  }

  Register = (details) => {
    axios
      .post(`${Route}/User/Register`, details)
      .then((res) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: res.data.token,
          })
        );
        this.storeCollector();
        // window.location.replace(`${window.location.pathname}/`);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: "Could not sign up" });
      });
  };

  componentDidMount() {
    this.storeCollector();
  }

  storeCollector() {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      this.setState({ login: true, store: store, error: "" });
    }
  }
  render() {
    return (
      <div>
        <img className="login-logo" src={logo} alt={"KyendR"} />
        <RegisterForm
          Register={this.Register}
          error={this.state.error}
        ></RegisterForm>
      </div>
    );
  }
}

export default RegisterPage;