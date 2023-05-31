import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import AuthButton from '../components/auth/general';

function Home() {
  return (
    <header className="app-header">
      <AuthButton
        button="Test"
        action="get-did-spaces-url"
        saveConnect={false}
        messages={{
          title: 'Create Key Pair',
          scan: 'Connect your DID Wallet to get the did spec',
          confirm: 'Confirm on your DID Wallet',
          success: 'Application Created',
        }}
      />

      <img src={logo} className="app-logo" alt="logo" />
      <pre style={{ textAlign: 'left' }}>
        <code>window.blocklet = {JSON.stringify(window.blocklet, null, 2)}</code>
      </pre>
      <Link className="app-link" to="/about">
        About
      </Link>
      <a className="app-link" href="https://developer.blocklet.io/docs/" target="_blank" rel="noopener noreferrer">
        Learn Blocklet
      </a>
    </header>
  );
}

export default Home;
