import React, { Component } from 'react';

import NavBtn from 'component/header/NavBtn.js';
import 'style/logo.css';
import logoImg from 'assets/images/selab_logo_S.png'

class Header extends Component {
  render() {
    return (
      <div className='Logo pull-left'>
        <NavBtn href='' exact={true} activeHover={false}>
          <img src={logoImg} alt='SE Lab logo'></img>
        </NavBtn>
      </div>
    );
  }
}

export default Header;