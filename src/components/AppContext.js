import React from 'react';
import axios  from "axios";
const AppContext = React.createContext();


let baseURL = process.env.REACT_APP_BASEURL

class AppContextProvider extends React.Component {

    state = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || ""
    }

componentDidMount = () =>{
    this.signUpInfo()
    this.loginInfo()
}
  

 //sign-up function context
  signUpInfo = (userData) => {
        return axios.post(`${baseURL}/auth/signup`, userData )
        .then(response => {
            const {user, token} = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user));
            this.setState ({
                user,
                token
            })
            return response
        })
  }


//Logging-in function context
 loginInfo = (credentials) => {
        return axios.post(`${baseURL}/auth/login`, credentials)
         .then(response => {
           const {token, user} = response.data
           localStorage.setItem('token', token)
           localStorage.setItem("user", JSON.stringify(user))
           this.setState({
               user,
               token
           })
         //dont forgot
          return response;
         })
 }


  render () {
      return (
        <AppContext.Provider
        value={{
        signUpInfo: this.signUpInfo,  // add this to the value object
        loginInfo: this.loginInfo
        }}
    >
        {this.props.children}
    </AppContext.Provider>
      )
  }

}



export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}


export default AppContextProvider;



