import { AUTH_TOKEN } from "../constant";

export const AuthUtil = {

  getToken(){
    localStorage.getItem(AUTH_TOKEN);
  },

  setToken(token){
    console.log(token);
    localStorage.setItem(AUTH_TOKEN, token);
    console.log('hello');
  }

};