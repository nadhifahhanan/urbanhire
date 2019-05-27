import React from 'react';
import { Menu, Button, Image, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Navbar.css'; 


class Navbar extends React.Component {
    state = { }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu ui secondary  menu size='large'>
                    <Menu.Item className="icon-logo">
                        <Image src='https://winter-cdn.urbanhire.com/img/logo.svg' href="https://www.urbanhire.com/" />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item icon='angle double down' simple>
                            <Dropdown.Menu className='left'>
                                <Dropdown.Item
                                    name='home'
                                    active={activeItem === 'home'}
                                    onClick={this.handleItemClick}
                                    href="https://www.urbanhire.com/">
                                    Home
                            </Dropdown.Item>
                                <Dropdown.Item name='products'
                                    active={activeItem === 'products'}
                                    onClick={this.handleItemClick} 
                                    href="https://www.urbanhire.com/features">
                                    Products
                            </Dropdown.Item>
                                <Dropdown.Item
                                    name='pricing'
                                    active={activeItem === 'pricing'}
                                    onClick={this.handleItemClick} 
                                    href="https://www.urbanhire.com/applicant-tracking-system-pricing">
                                    Pricing
                            </Dropdown.Item>
                                <Dropdown.Item
                                    name='customers'
                                    active={activeItem === 'customers'}
                                    onClick={this.handleItemClick} 
                                    href="https://www.urbanhire.com/customers">
                                    Customers
                            </Dropdown.Item>
                                <Dropdown.Item
                                    name='partners'
                                    active={activeItem === 'partners'}
                                    onClick={this.handleItemClick} 
                                    href="https://www.urbanhire.com/partners">
                                    Partners
                            </Dropdown.Item>
                                <Dropdown.Item
                                    name='job search'
                                    active={activeItem === 'job search'}
                                    onClick={this.handleItemClick} 
                                    href="https://www.urbanhire.com/jobs">
                                    Job Search
                            </Dropdown.Item>
                                <Dropdown.Item
                                    name='login'
                                    active={activeItem === 'login'}
                                    onClick={this.handleItemClick} 
                                    href="https://pro.urbanhire.com/signin">
                                    Log In
                            </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button positive href="https://pro.urbanhire.com/signup?_ga=2.207819024.321113545.1558589636-562621735.1555067102">Try for Free</Button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href="https://www.urbanhire.com/"/>
                        <Menu.Item
                            name='products'
                            active={activeItem === 'products'}
                            onClick={this.handleItemClick}
                            href="https://www.urbanhire.com/features"
                        />
                        <Menu.Item
                            name='pricing'
                            active={activeItem === 'pricing'}
                            onClick={this.handleItemClick}
                            href="https://www.urbanhire.com/applicant-tracking-system-pricing"
                        />
                        <Menu.Item
                            name='customers'
                            active={activeItem === 'customers'}
                            onClick={this.handleItemClick}
                            href="https://www.urbanhire.com/customers"
                        />
                        <Menu.Item
                            name='partners'
                            active={activeItem === 'partners'}
                            onClick={this.handleItemClick}
                            href="https://www.urbanhire.com/partners"
                        />
                        <Menu.Item
                            name='job search'
                            active={activeItem === 'job search'}
                            onClick={this.handleItemClick}
                            href="https://www.urbanhire.com/jobs"
                        />
                        <div className="navbarBorder"> </div>
                        <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                            href="https://pro.urbanhire.com/signin"
                        />
                        <Menu.Item>
                            <Button positive href="https://pro.urbanhire.com/signup?_ga=2.207819024.321113545.1558589636-562621735.1555067102"> Try for Free</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default Navbar;


    
    