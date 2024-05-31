import React, { useState } from 'react';
import MacFormatter from './components/MacFormatter';
import MacResult from './components/MacResult';
import { GlobalStyle, AppContainer } from './styles';

function App() {
  const [formattedMacs, setFormattedMacs] = useState([]);
  const [vendor, setVendor] = useState('');

  const handleMacFormat = (formattedMacs) => {
    setFormattedMacs(formattedMacs);
  };

  const handleVendorFetch = (vendor) => {
    setVendor(vendor);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Formatação de MAC</h1>
      <MacFormatter onFormat={handleMacFormat} onFetchVendor={handleVendorFetch} />
      {formattedMacs.length > 0 && <MacResult formattedMacs={formattedMacs} vendor={vendor} />}
    </AppContainer>
  );
}

export default App;

