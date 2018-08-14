import React, { Component } from 'react';
import Navbar from './navbar';

class About extends Component {

// 	render() {
// 		return (
// 			<div className='aboutMe'>


// 				<Navbar/>
// 			</div>
// 		);
// 	}
// }

    constructor(props) {
        super(props)

        this.state = {
            status: false
        }
    }

    toggleAbout = function() {
        this.props.callback(this.state.status)
        if(this.state.status) {
            document.getElementById(this.id).classList.remove('about-hide');
        } 

        this.setState({ status: !this.state.status })
    }.bind(this);

    render() {
        this.id = `about-${this.props.id}`
        return (
            <a id={this.id} onClick={() => this.toggleAbout()} className={`${this.props.className} about`}></a>
        )
    }
}



export default About;