import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin: 10px;
  cursor: pointer;
`;

const MacFormatter = ({ onFormat }) => {
  const [macAddress, setMacAddress] = useState('');

  const formatMacAddress = (macAddress) => {
    const macLimpo = macAddress.replace(/[:\-.]/g, '');

    if (macLimpo.length !== 12) {
      return "Endereço MAC inválido.";
    }

    const macFormato1 = macLimpo.match(/.{1,2}/g).join(':');
    const macFormato2 = macLimpo.match(/.{1,2}/g).join('-');
    const macFormato3 = macLimpo.match(/.{1,4}/g).join('.');

    return [macFormato1, macFormato2, macFormato3];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMacs = formatMacAddress(macAddress);
    if (typeof formattedMacs === 'string') {
      alert(formattedMacs);
    } else {
      onFormat(formattedMacs);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite o endereço MAC"
          value={macAddress}
          onChange={(e) => setMacAddress(e.target.value)}
        />
        <Button type="submit">Formatar MAC</Button>
      </form>
    </Container>
  );
};

export default MacFormatter;

