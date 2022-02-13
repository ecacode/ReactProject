import React from "react";
import styled from "styled-components";


export const Sidebar = () => {
	return(
		<Container>
			<div className="Menu-items">
				Dashboard
			</div>
		</Container>
		)
}

const Container = styled.div `
width:300px;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background:gray;
position:fixed;
top:0;
left:0;
padding:0;
overflow: hidden;

.Menu-items{
	background:red;
	color:#fff;
	display:flex;
	width:300px;
	padding:5px 10px;
	cursor:pointer;

	&:hover{
		background:blue;
	}
}
`