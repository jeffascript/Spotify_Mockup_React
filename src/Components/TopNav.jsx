import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        return (
            <div>
                <nav className="nav justify-content-center">
                  <a className="nav-link active topNavStyle " >Featured</a>
                  <a className="nav-link  topNavStyle" >Podcasts</a>
                  <a className="nav-link topNavStyle" >Charts</a>
                  <a className="nav-link topNavStyle" >Genres and Mood</a>
                  <a className="nav-link topNavStyle" >New Releases </a>
                  <a className="nav-link topNavStyle" >Discover</a>
                </nav>
            </div>
        );
    }
}

export default TopNav;