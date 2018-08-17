import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { NavLink } from "react-router-dom";
import { LOGIN, LOGIN_USER, STORE_TOKEN } from "../graphql/mutation";
import { AuthUtil } from "../common/utils";
import { Title, Form, Button, Input } from "./style";
import { AUTH_TOKEN } from "../constant";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { password, username } = this.state;

    return (
      <div>
        <Mutation mutation={LOGIN}>
          {(mutate, { loading, error, client }) => (
            <div>
              <Title>Already have an account???</Title>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  const self = this;
                  mutate({
                    variables: {
                      username,
                      password
                    }
                  })
                    .then(res => {
                      console.log('hhhhhh')
                      AuthUtil.setToken(res.data.login.token);
                      client.mutate({
                        mutation: STORE_TOKEN,
                        variables: {
                          loggedIn: true
                        }
                      }).then(results => {
                        console.log("results"+ results)
                      }).catch(err => {
                        console.log(err)
                      })

                      console.log('jjjj')
                        
                      this.props.history.push("/home");
                    })
                    .catch(err => {
                      alert(err.message);
                    });
                }}
              >
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
                    Log In
                  </Button>
                )}
                <div>
                  <span>
                    Dont have an account?{" "}
                    <NavLink to="/signup">SIGN UP</NavLink>
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

export default LoginPage;
