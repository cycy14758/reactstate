import React, { Component } from 'react';
import FullName from './FullName';
import Img from './fileimg';
import Bio from './filebio';
import Profession from './fileprofession';
import './index.css';


class App extends Component {
  state = {
    person: {
    fullName: 'cyrine',
    bio: 'A passionate developer',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
      profession: 'Web Developer',
      },
     timeInterval:0,
     show: false,}
     
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          timeInterval: prevState.timeInterval + 1,
        }));
      }, 1000);}
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    
  render() {
    return ( 
     <div>

{ this.state.show?<div>
    <FullName  className="fullName" props={this.state.person.fullName}  x={this.state.timeInterval} />
   <Img className="img" props={this.state.person.imgSrc} />
   
   <Bio className='img'props={this.state.person.bio} />
   <Profession  props={this.state.person.profession}/>
   </div>:null}
   <h2>counterApp:{this.state.timeInterval}</h2>
   <button onClick={()=>this.setState({show:!this.state.show})}>click</button>


     </div>)

}
}

export default App;
