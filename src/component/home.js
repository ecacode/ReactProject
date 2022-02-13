import React, {useState} from "react";
import {Bar} from "react-chartjs-2";
import styled from "styled-components";
import pptxgen from "pptxgenjs";

export const Home = () =>{
	const [data, setData] = useState([
    {
      name: "Projected Sales",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      values: [1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789, 11123, 12121],   
	}
  ])



	const data2 = {
    labels: data[0].labels,
    datasets: [
      {
        label: data[0].name,
        data: data[0].values,
        fill: false,
        backgroundColor: 'rgb(255, 191, 0)',
        borderColor: 'rgba(255, 230, 154, 0.2)',
      },
    ],
  };

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  let pptx = new pptxgen();

  let slide = pptx.addSlide();
  
  
  
  const btnDownload = () => {
    slide.addChart(pptx.ChartType.bar, data, { x: 1, y: 1, w: 8, h: 4 });
    pptx.writeFile({ fileName: "react-demo.pptx" })
  };


	return (
		<Container>
			<div style={{width:"500px", height:"500px"}}>
					<Bar data={data2} options={options} />
			</div>
			<div>
        <button onClick={btnDownload}>
          download
        </button>
      </div>
		</Container>
		)
}

const Container = styled.div `
padding:0px 10vw;

`