import React from 'react';
import './Navbar.css'; 

class Navbar extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="site-header">
                <div className="container-fluid">
                    <a href="https://www.urbanhire.com/" title="Urbanhire Home page" className="logo">
                        <img src="https://winter-cdn.urbanhire.com/img/logo.svg" title="Urbanhire" alt="Urbanhire"/>
                    </a>
                    <a class="menu-toggle m-show">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <nav class="site-nav">
                        <div class="site-nav-header m-show-b">
                            <span>Menu</span>
                        </div>
                        <ul class="menu">
                            <li>
                                <a href="https://www.urbanhire.com/" title="Urbanhire Home page">Home</a>
                            </li>
                            <li>
                                <a href="https://www.urbanhire.com/features" title="Urbanhire ATS features">Features</a>
                            </li>
                            <li>
                                <a href="https://www.urbanhire.com/applicant-tracking-system-pricing" title="Urbanhire ATS pricing" class="active">Pricing</a>
                            </li>
                            <li>
                                <a href="https://www.urbanhire.com/customers" title="Urbanhire ATS customers">Customers</a>
                            </li>
                            <li>
                                <a href="https://resources.urbanhire.com/" target="_blank">Resources</a>
                            </li>
                            <li class="has-children">
                                <a href="/jobs">Job Search</a>
                                <ul>
                                    <li>
                                        <a href="/signin" target="_blank">Log In as Jobseekers</a>
                                    </li>
                                    <li>
                                        <a href="/signup" target="_blank">Register as Jobseekers</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="https://pro.urbanhire.com/signin">Log In</a>
                            </li>
                            <li>
                                <a href="https://pro.urbanhire.com/signup" class="btn btn-6">Try for Free</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
      </div>
    )
  }
}

export default Navbar;
