

//1. back-end localhost:8080 구동 (Spring Application)
//2. fonrt-end server 구동 (react-app 폴더에서 npm run start)
//3.  localhost:8080/api/crud/insert 해서 데이터 사입
//4. localhost:3000 으로 데이터 불러와지는지 확인


import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    constructor(props){
          super(props)
          this.state={
              email: '123',
          }
      }
    componentDidMount(){

        axios.get("http://localhost:8080/api/crud/user/select/1")
        .then(response => {
            this.setState({email: response.data.email})
        })
        .catch(error => {
            console.log(error)
        })

    }


    render() {

    return (
      <div>
       <h2>백엔드 통신 확인: {this.state.email}</h2>
      </div>
    );
    }
}

export default App;