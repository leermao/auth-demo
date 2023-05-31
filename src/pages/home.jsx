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
    </header>
  );
}

export default Home;
