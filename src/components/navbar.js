import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                
                <div className="nav">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/about" className="link">About</Link>
                    <Link to="/skills" className="link">Skills</Link>
                    <Link to="/resume" className="link">Resume</Link>
                </div> 

            </div>
        );
    }
}