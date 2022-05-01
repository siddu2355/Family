import React, { Component } from 'react';

class Playground extends Component {
    state = { 
        image:"logo192.png",
        p:"images/f.png",
        q:"images/mega.jpg",
        r:"images/nandamuri.jpg"
     } 
    render() { 
        return (
            <div>
                <img src={this.state.image} alt="" />
                <img src={this.state.p} alt="" />
                <img src={this.state.q} alt="" />
                <img src={this.state.r} alt="" />
            </div>
            
        );
    }
}

export default Playground;
