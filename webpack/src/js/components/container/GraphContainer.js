import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Input from "../presentational/Input";
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data01 = [{x: 2010, y: 100}, {x: 2011, y: 120}, {x: 2012, y: 117}, {x: 2013, y: 134}, {x: 2014, y: 144}, {x: 2015, y: 144}, {x:2016, y: 177}];
const data02 = [{x: 2010, y: 100}, {x: 2011, y: 101}, {x: 2012, y: 111}, {x: 2013, y: 120}, {x: 2014, y: 122}, {x: 2015, y: 102}, {x:2016, y: 90}];
const data03 = [{x: 2010, y: 100}, {x: 2011, y: 120}, {x: 2012, y: 122}, {x: 2013, y: 122}, {x: 2014, y: 129}, {x: 2015, y: 120}, {x:2016, y: 125}];
const data04 = [{x: 2010, y: 100}, {x: 2011, y: 130}, {x: 2012, y: 139}, {x: 2013, y: 150}, {x: 2014, y: 170}, {x: 2015, y: 166}, {x:2016, y: 160}];
const data05 = [{x: 2010, y: 100}, {x: 2011, y: 119}, {x: 2012, y: 117}, {x: 2013, y: 119}, {x: 2014, y: 110}, {x: 2015, y: 133}, {x:2016, y: 135}];
const data06 = [{x: 2010, y: 100}, {x: 2011, y: 102}, {x: 2012, y: 99}, {x: 2013, y: 108}, {x: 2014, y: 128}, {x: 2015, y: 125}, {x:2016, y: 130}];

class GraphContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
            data: false
      };
      this.receiveData = this.receiveData.bind(this);
   }

   componentDidMount() {
      var _self = this;
      fetch('http://localhost:4567/stockdata/?user=perwendel', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then(function(response) {
         // convert to JSON
         return response.json();
      })
      .then(function(json) {
         // process JSON stock data
         console.log(json);
         _self.receiveData(json);
      })
      .catch(function(error) {
         console.log(error);
      });
   }

   receiveData(data) {
      this.setState({data});	 
   }

   render() {
      return <div>Got it!</div>
   }
}

const wrapper = document.getElementById("graph");
wrapper ? ReactDOM.render(<GraphContainer />, wrapper) : false;

export default GraphContainer;
