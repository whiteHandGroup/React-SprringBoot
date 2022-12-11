//1. back-end localhost:8080 구동 (Spring Application)
//2. fonrt-end server 구동 (react-app 폴더에서 npm run start)
//3.  localhost:8080/api/crud/insert 해서 데이터 사입
//4. localhost:3000 으로 데이터 불러와지는지 확인

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

// React Router 란? : 클라이언트 사이드 라우팅이라고도 하며 사용자가 요청한 URL에 따라서 이에 맞는 컴포넌트를 렌더링 해주는 것을 의미한다.
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //리액트에서 페이지 이동시 필요
import Navigation from './components/nav';
import Menu1 from './components/menu1';
import Menu2 from './components/menu2';
import Menu3 from './components/menu3';
import InsertBook from './components/insertBook';
import Login from './components/login';

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
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<home />} />
                    <Route path="/menu1" element={<Menu1 />} />
                    <Route path="/menu2" element={<Menu2 />} />
                    <Route path="/menu3" element={<Menu3 />} />
                    <Route path="/insertBook" element={<InsertBook />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
           <h2>백엔드 통신 확인: {this.state.email}</h2>
          </div>
        );
    }
}

export default App;