import React from 'react';
import axios  from "axios";
const AppContext = React.createContext();


let baseURL = process.env.REACT_APP_BASEURL
let apiKEY = process.env.REACT_APP_APIKEY

class AppContextProvider extends React.Component {

    state = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        topRated: [...Array(19).fill({...Object})],
        topRated2: [...Array(19).fill({...Object})],
        popularMovies: [...Array(19).fill({...Object})],
        popularMovies2: [...Array(19).fill({...Object})],
        topMovies1: [...Array(19).fill({...Object})],
        topMovies2: [...Array(19).fill({...Object})]
    }

componentDidMount = () =>{
    this.signUpInfo()
    this.loginInfo()
    this.getTopRateTvShow()
    this.getTopRateTvShowPage2()
    this.getTopRatedMovie()
    this.getTopRatedMovie2()
    this.getTopRated()
    
    
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

//fetch data for Most popolar tv shows in the world
getTopRateTvShow = () => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=bddaacccdeb12731736b11d2790b14c8&language=en-US&page=1`, {
        "method": "GET",
        }).then(data => data.json(), err => console.log(err))
        .then(data => this.setState({topRated: data.results}), err => console.log('data', err))
}

getTopRateTvShowPage2= () => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=bddaacccdeb12731736b11d2790b14c8&language=en-US&page=4`, {
        "method": "GET",
        }).then(data => data.json(), err => console.log(err))
        .then(data => this.setState({topRated2: data.results}), err => console.log('data', err))
}

//call to popular movies
getTopRatedMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bddaacccdeb12731736b11d2790b14c8&language=en-US&page=1`, {
        "method": "GET",
        }).then(data => data.json(), err => console.log(err))
        .then(data => this.setState({popularMovies: data.results}), err => console.log('data', err))
}


getTopRatedMovie2 = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bddaacccdeb12731736b11d2790b14c8&language=en-US&page=2`, {
        "method": "GET",
        }).then(data => data.json(), err => console.log(err))
        .then(data => this.setState({popularMovies2: data.results}), err => console.log('data', err))
}
 
getTopRated = () => {
     let firstPageCall = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=bddaacccdeb12731736b11d2790b14c8&language=en-US&page=1`)
     let secondPageCall = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=bddaacccdeb12731736b11d2790b14c8&language=en-US&page=2`)

     Promise.all([firstPageCall, secondPageCall])
     .then(values => Promise.all(values.map(value => value.json())))
     .then(apivalues => {
         console.log(apivalues[1].results)
         this.setState({topMovies1: apivalues[0].results })
         this.setState({topMovies2: apivalues[1].results})
     })

}




  render () {
      return (
        <AppContext.Provider
        value={{
        signUpInfo: this.signUpInfo,  // add this to the value object
        loginInfo: this.loginInfo,
        getTopRateTvShow: this.state.topRated,
        topRated2: this.state.topRated2,
        popularMovies: this.state.popularMovies,
        popularMovies2: this.state.popularMovies2,
        topMovies1: this.state.topMovies1,
        topMovies2: this.state.topMovies2,
        token: this.state.token
        

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



