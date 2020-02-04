import React, { Component } from 'react';
import {Link} from "react-router-dom"

class TopNav extends Component {
    render() {
        return (
            <div>
                <nav className="nav justify-content-center">
                  <Link to="/" className="nav-link active topNavStyle " >Featured</Link>
                  <Link to="/" className="nav-link  topNavStyle" >Podcasts</Link>
                  <Link to="/" className="nav-link topNavStyle" >Charts</Link>
                  <Link to="/" className="nav-link topNavStyle" >Genres and Mood</Link>
                  <Link to="/" className="nav-link topNavStyle" >New Releases </Link>
                  <Link to="/" className="nav-link topNavStyle" >Discover</Link>
                </nav>
            </div>
        );
    }
}

export default TopNav;