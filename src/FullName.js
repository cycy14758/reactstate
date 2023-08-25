import React, { Component } from 'react';

class FullName extends Component {
 
state={
    c:0
}
    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState(prevState => ({
           c: prevState.c+ 1,
          }));
        }, 1000);}
        componentWillUnmount() {
          clearInterval(this.interval);
        }
  
    render() {
        

        return(
            <div>
            <h1>       {this.props.props}  </h1>
<h3>counter child:{this.state.c}</h3>
</div>
        )
        }}
export default FullName