import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Input from "../presentational/Input";
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import $ from 'jquery';

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
      // first, make a javascript list of all the Recharts <Scatter> elements by looping over our saved stock data
      var scatters = [];
      
      if (this.state.data) {
         var colors = [ '#FF0000', '#00FF00', '#0000FF', '#000000' ];  // red, green, blue, black
         var colorIndex = 0;
         // loop over all elements in this.state.data, add <Scatter> for each
         $.each(this.state.data, function (key, value) {
            var symbol = key;
            var stockData = value;
            var color = colors[colorIndex % colors.length]; // rotate colors
            scatters.push(<Scatter name={symbol} data={stockData} fill={color} line shape="square" />);
            colorIndex++;
         });
         
         return (          
            <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
               <XAxis type="number" dataKey={'date'} name='year' unit='' tickCount={7} domain={['dataMin', 'dataMax']} />
               <YAxis type="number" dataKey={'price'} name='price' unit='USD'/>
               <ZAxis range={[100]}/>
               <CartesianGrid />
               <Tooltip cursor={{strokeDasharray: '3 3'}}/>
               <Legend/>
               {scatters}
            </ScatterChart>    
         );
      } else {
         return false;
      }
   }
}

const wrapper = document.getElementById("graph");
wrapper ? ReactDOM.render(<GraphContainer />, wrapper) : false;

export default GraphContainer;
