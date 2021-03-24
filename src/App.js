// --------------------------------------------------------------------------------------------------
// Nikoleta Koleva
// GitHub Issue Browser
// 03.03.2021
// --------------------------------------------------------------------------------------------------


import React, { Component } from 'react';
import './App.css';

// Imports necessary for app
import axios from 'axios';
import Popup from 'reactjs-popup';
import ReactPaginate from 'react-paginate';
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';

// All except Header & Footer implemented in App - this can be optimized by splitting into more components
export default class App extends Component {
  // Use a stateful approach for pagination, harder to do w hooks, especially if we want a dynamic page # generation
  constructor ( props ) {
    super( props );
    this.state = {
      offset: 0,
      data: [],
      perPage: 8,
      currentPage: 0
    }; // Cycle between the different pages
    this.handlePageClick = this
      .handlePageClick
      .bind(this);
  };

  // GET data from provided API here and do actions with the obtained data
  receivedData() {
    // Use axios to fetch the data - it's one of the cleaner approaches for http reqs
    axios
      .get(// Please contact me for the correct link
      )
      .then( res => {
        const data = res.data;
        // Obtain data based on how many items are wanted per page
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
        // Below the Issues will be displayed on the different pages
        // If an Issue is clicked, a popup is triggered that will display the additional info wanted
        // Some additional styling included to ease readability
        const postData = slice.map(pd => 
          <React.Fragment> 
            <Popup trigger={
              <p className={'issues'}>Issue # {pd.number} : " {pd.title} " is {pd.state}</p>
            } modal nested>
              <div className={'modalStyle'}>
                <h2>Issue #: {pd.number}</h2>
                <hr />
                <h3>Title: {pd.title}</h3>
                <hr />
                <h3>Owner: {pd.user.login}</h3>
                <hr />
                <h3>Created: {pd.created_at.substr(0, 10)}</h3>
                <hr />
                <h3><a href={pd.html_url} target='_blank' rel='noopener noreferrer' color='white'> View GitHub Issue Here</a></h3>
                <hr />
                <div className="detailsStyle">
                  <p>Details: {pd.body}</p>
                </div>
              </div>
            </Popup> <hr />
          
          </React.Fragment>);

        // Update state & subsequent page count based on math logic below (how many items in api call)
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        });
      });
  };

  // Handle what happens when someone clicks on a different page # or next/prev buttons
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.receivedData()
    });
  };

  // Ensure data was properly received
  componentDidMount () {
    this.receivedData()
  };


  // Render issues listings and pagination
  // Also render the app's header & footer
  render() {
    return (
      <div>
        <Header />
        <div className={'issuesBox'}>
          {this.state.postData}
          <ReactPaginate
            previousLabel={'PREV'}
            nextLabel={'NEXT'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
        <Footer />
      </div>
    )
  }
};
