import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Input from "../presentational/Input";
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class GraphContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
            data: false
      };
   }

   componentDidMount() {
      var _self = this;
      fetch('http://localhost:4567/stockdata/?user=perwendel', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then(function(response) {
         // convert to JSON
         return response.json();
      })
      .then(function(data) {
         // save JSON stock data to render later
         console.log(data);
         _self.setState({data});
      })
      .catch(function(error) {
         console.log(error);
      });
   }

   render() {
      return (
         <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis type="number" dataKey={'date'} name='year' unit='' tickCount={7} domain={['dataMin', 'dataMax']} />
            <YAxis type="number" dataKey={'price'} name='price' unit='USD'/>
            <ZAxis range={[100]}/>
            <CartesianGrid />
            <Tooltip cursor={{strokeDasharray: '3 3'}}/>
            <Legend/>
            <Scatter name='TSLA' data={this.state.data["TSLA"]} fill='#8884d8' line shape="square"/>
            <Scatter name='MSFT' data={this.state.data["MSFT"]} fill='#82ca9d' line shape="diamond"/>
            <Scatter name='AMZN' data={this.state.data["AMZN"]} fill='#ff0000' line shape="circle"/>
            <Scatter name='GOOG' data={this.state.data["GOOG"]} fill='#00ff00' line shape="star"/>
            <Scatter name='UBER' data={this.state.data["UBER"]} fill='#0000ff' line shape="triangle"/>
            <Scatter name='AAPL' data={this.state.data["AAPL"]} fill='#000000' line shape="cross"/>
         </ScatterChart>    
      );
   }
}

const wrapper = document.getElementById("graph");
wrapper ? ReactDOM.render(<GraphContainer />, wrapper) : false;

export default GraphContainer;
