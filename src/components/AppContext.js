import React from 'react';
import axios  from "axios";
const AppContext = React.createContext();


let baseURL = process.env.REACT_APP_BASEURL

class AppContextProvider extends React.Component {

    state = {
        user: {},
        token: ""
    }

componentDidMount = () =>{
    this.signUpInfo()
}
  
  signUpInfo = (userData) => {
        return axios.post(`${baseURL}/auth/signup`, userData )
        .then(response => {
            const {user, token} = response.data
            this.setState ({
                user,
                token
            })
            return response
        })
  }

  render () {
      return (
        <AppContext.Provider
        value={{
        signUpInfo: this.signUpInfo,  // add this to the value object
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



