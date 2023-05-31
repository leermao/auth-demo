import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { create } from '@arcblock/ux/lib/Theme';
import { getWebWalletUrl } from '@arcblock/did-connect/lib/utils';

import './app.css';
import Home from './pages/home';
import About from './pages/about';
import { ToastProvider } from './components/toast';
import { SessionProvider } from './contexts/session';

const theme = create();

let apiPrefix = '/';
if (window.blocklet && window.blocklet.prefix) {
  apiPrefix = window.blocklet.prefix;
} else if (window.env && window.env.apiPrefix) {
  apiPrefix = window.env.apiPrefix;
}
const webWalletUrl = getWebWalletUrl();

function App() {
  return (
    <div className="app">
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <EmotionThemeProvider theme={theme}>
            <SessionProvider serviceHost={apiPrefix} webWalletUrl={webWalletUrl}>
              <ToastProvider>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </ToastProvider>
            </SessionProvider>
          </EmotionThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
