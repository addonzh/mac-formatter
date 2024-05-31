import React, { useState } from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultItem = styled.div`
  margin: 5px 0;
`;

const CopyButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const Notification = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const MacResult = ({ formattedMacs, vendor }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = (format) => {
    navigator.clipboard.writeText(format);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Oculta a notificação após 3 segundos
  };

  return (
    <ResultContainer>
      <h2>Resultados</h2>
      {formattedMacs.map((mac, index) => (
        <ResultItem key={index}>
          {mac}
          <CopyButton onClick={() => handleCopy(mac)}>Copiar</CopyButton>
          <br />
        </ResultItem>
      ))}
      {vendor && (
        <ResultItem>
          {vendor}
          <br />
        </ResultItem>
      )}
      {showNotification && <Notification>Formato copiado para o clipboard!</Notification>}
    </ResultContainer>
  );
};

export default MacResult;

