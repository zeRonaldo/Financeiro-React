import React, { Component, Fragment } from 'react';
import Login from './Pages/Login';
import Gerenciador from './Pages/Gerenciador';
import {isLogged} from './services/auth'
import './styles/css/App.css';

class App extends Component {
  state = {
    isLogged: false
  }

  componentDidMount(){
    this._isLogged()
  }

  _isLogged = async () => {
    try{
       await isLogged ();
      this.setState({
        isLogged:true
      })
    }catch(e){
      this.setState({ 
        isLogged:false
      })
    }
  }
  render() {
    const {isLogged} = this.state;
    let content;
    if(isLogged){
       content = <Gerenciador/>;
    }else{
       content = <Login afterLogin={this._isLogged}/>;
    }
    
    return (
      <Fragment>
        {content}
      </Fragment>
      

    );
  }
}

export default App;
