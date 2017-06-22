import React, { Component } from 'react';

import Icon from 'components/Icon';

import nexus from './nexus.png';
import './styles.css';

class Home extends Component {
  componentDidMount() {
    document.body.classList.add('home');
  }

  componentWillUnmount() {
    document.body.classList.remove('home');
  }

  render() {
    return (
      <div className="container Home">
        <div className="Home-intro">
          <h1 className="Home-title">Consulta tu saldo<br />sin esfuerzo</h1>
          <h2 className="Home-subtitle">
            Consultar tus tarjetas
            <br />
            <abbr title="Transporte Urbano Colectivo">TUC</abbr>
            {' '}
            desde cualquier lugar.
          </h2>
          <div className="Home-buttons">
            <a
              className="Home-button"
              href="https://play.google.com/store/apps/details?id=com.socialimprover.saldotuc"
            >
              <Icon name="play_store" /> <b>Google</b> play
            </a>
            <a
              className="Home-button"
              href="/app"
            >
              <b>Web</b> app
            </a>
          </div>
        </div>
        <img alt="Saldo TUC" className="Home-image" src={nexus} />
      </div>
    );
  }
}

export default Home;
