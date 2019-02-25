import React, { Component } from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'
import './NavBar.css';
import {NavLink} from 'react-router-dom';

export class NavBar extends Component {

  render() {
    return (
      <div>
        <Menu className="bb-menu" fixed='top'>
          <Container>
            <NavLink className="header item bb-menu-item" to="/">
              <Image size='mini' src='https://via.placeholder.com/100x80' style={{ marginRight: '1.5em' }} />
              [BRASILSEG]
            </NavLink>
            <NavLink className="item bb-menu-item bb-menu-item--hover" to="/">Home</NavLink>
            <NavLink className="item bb-menu-item bb-menu-item--hover" to="/exemplo">Exemplo</NavLink>
          </Container>
        </Menu>
      </div>
    )
  }
}
