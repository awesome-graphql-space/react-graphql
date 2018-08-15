import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Mutation } from "react-apollo";
import { SIGNUP } from "../graphql/mutation";
import { AuthUtil } from "../common/utils";
import { Title, Form, Button, Input } from "./style";

class SignupPage extends Component {
  state = {
    username: "",
    displayName: "",
    password: ""
  };

  render() {
    const { password, username, displayName } = this.state;

    return (
      <div>
        <Mutation mutation={SIGNUP}>
          {(mutate, { loading, error }) => (
            <div>
              <Title>Signup on twister</Title>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  mutate({
                    variables: {
                      username,
                      displayName,
                      password
                    }
                  })
                    .then(res => {
                      console.log(res);
                      AuthUtil.setToken(res.data.signup.token);
                      this.props.history.push("/home");
                    })
                    .catch(err => {
                      alert(err.message);
                    });
                }}
              >
                <Input
                  placeholder="Display name"
                  onChange={e => this.setState({ displayName: e.target.value })}
                  type="text"
                  name="displayName"
                />
                <Input
                  placeholder="Username"
                  onChange={e => this.setState({ username: e.target.value })}
                  type="text"
                  name="username"
                />
                <Input
                  placeholder="Passowrd"
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  name="password"
                />
                {loading ? (
                  <div>loading ...</div>
                ) : (
                  <Button
                    disabled={!this.state.username && !this.state.password}
                    type="submit"
                  >
                    SIGNUP
                  </Button>
                )}
                <br />
                <div>
                  <span>
                    Already have an account?{" "}
                    <NavLink to="/login">Login</NavLink>
                  </span>
                </div>
              </Form>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
}

export default SignupPage;
