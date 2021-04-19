import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import cgna from './assets/dom_cgna_peq.png'

export class Header extends React.Component  {

  render() {
    return(
      <div class="header-portal border-gradient gradient-border-header navbar navbar-inverse nav">
      <img src={cgna} class="logo-cgna" />
      <h3 class='portal-nav-name'> Portal Operacional </h3>

        <div class="pull-right">
          <ul class="nav pull-right">
              <li class="dropdown"><a href="#" class="dropdown-toggle" id="list-dropdown" data-toggle="dropdown">
                  <FontAwesomeIcon icon={faUser} class='icon-user' />
                </a>
                  <ul class="dropdown-menu">
                      <li><a href="/user/preferences"><i class="icon-cog"></i> Preferences</a></li>
                      <li><a href="/help/support"><i class="icon-envelope"></i> Contact Support</a></li>
                      <li class="divider"></li>
                      <li><a href="/auth/logout"><i class="icon-off"></i> Logout</a></li>
                  </ul>
              </li>
          </ul>
        </div>
      </div>
    )
  }

}