import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import React from "react";
import {Sidebar} from "./component/sidebar";
import {Home} from "./component/home"



function App() {

  return (
    <React.Fragment>
      <Container>
        <section>
          <Sidebar />
        </section>
        <section style={{marginLeft:"300px"}}>
          <Home />
        </section>
      </Container>
    </React.Fragment>
  );
}

export default App;


const Container = styled.div `
display:flex;
width:100vw;
height:100vh;
`
