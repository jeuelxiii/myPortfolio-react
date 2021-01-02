import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default class NavBar extends Component {
  render() {
    return (
      <header className="bg-green-300 opacity-95">
        <div className="container mx-auto flex justify-between">
          <nav className="flex">
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inline-flex items-center py-6 px-3 mx-4 text-gray-600 hover:text-white text-4xl font-bold cursive tracking-widest"
            >
              Jeuel
            </NavLink>
            <NavLink
              to="/post"
              activeClassName="text-blue-100 bg-blue-500"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-blue-100 bg-blue-500"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about-me"
              activeClassName="text-blue-100 bg-blue-500"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white"
            >
              About Me!
            </NavLink>
          </nav>
          <div className="inline-flex py-3 px-3 my-6">
              <SocialIcon url="https://www.facebook.com/john.jeuel/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
              <SocialIcon url="https://twitter.com/jeuel_oppa" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
              <SocialIcon url="https://github.com/jeuelxiii" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
              <SocialIcon url="https://www.linkedin.com/in/john-jeuel-joaquin-ece-ect-7516a3115/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
          </div>
        </div>
      </header>
    );
  }
}
