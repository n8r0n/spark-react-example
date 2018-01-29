import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Input from "../presentational/Input";
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data01 = [{x: 2010, y: 100}, {x: 2011, y: 120}, {x: 2012, y: 117}, {x: 2013, y: 134}, {x: 2014, y: 144}, {x: 2015, y: 144}, {x:2016, y: 177}];
const data02 = [{x: 2010, y: 100}, {x: 2011, y: 101}, {x: 2012, y: 111}, {x: 2013, y: 120}, {x: 2014, y: 122}, {x: 2015, y: 102}, {x:2016, y: 90}];
const data03 = [{x: 2010, y: 100}, {x: 2011, y: 120}, {x: 2012, y: 122}, {x: 2013, y: 122}, {x: 2014, y: 129}, {x: 2015, y: 120}, {x:2016, y: 125}];
const data04 = [{x: 2010, y: 100}, {x: 2011, y: 130}, {x: 2012, y: 139}, {x: 2013, y: 150}, {x: 2014, y: 170}, {x: 2015, y: 166}, {x:2016, y: 160}];
const data05 = [{x: 2010, y: 100}, {x: 2011, y: 119}, {x: 2012, y: 117}, {x: 2013, y: 119}, {x: 2014, y: 110}, {x: 2015, y: 133}, {x:2016, y: 135}];
const data06 = [{x: 2010, y: 100}, {x: 2011, y: 102}, {x: 2012, y: 99}, {x: 2013, y: 108}, {x: 2014, y: 128}, {x: 2015, y: 125}, {x:2016, y: 130}];

class FormContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    	<ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          	<XAxis type="number" dataKey={'x'} name='date' unit='' tickCount={7} domain={['dataMin', 'dataMax']} />
          	<YAxis type="number" dataKey={'y'} name='price' unit='USD'/>
            <ZAxis range={[100]}/>
            <CartesianGrid />
          	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
            <Legend/>
          	<Scatter name='TSLA' data={data01} fill='#8884d8' line shape="square"/>
            <Scatter name='MSFT' data={data02} fill='#82ca9d' line shape="diamond"/>
            <Scatter name='AMZN' data={data03} fill='#ff0000' line shape="circle"/>
            <Scatter name='GOOG' data={data04} fill='#00ff00' line shape="star"/>
            <Scatter name='UBER' data={data05} fill='#0000ff' line shape="triangle"/>
            <Scatter name='AAPL' data={data06} fill='#000000' line shape="cross"/>
        </ScatterChart>    
    );
  }
}

const wrapper = document.getElementById("graph");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
