import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";



class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };
  
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  
  renderPage(){
    const { state : {currentPage} } = this;
    if (currentPage === "Home"){
      return <Home />
    }
    if (currentPage === "About"){
      return <About />
    }
    if (currentPage === "Blog"){
      return <Blog />
    }
    if (currentPage === "Contact"){
      return <Contact />
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        { this.renderPage() }
      </div>
    );
  }
}

export default PortfolioContainer;
