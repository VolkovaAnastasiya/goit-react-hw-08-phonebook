import React from 'react';
import { Hearts } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <Hearts color="#550c5f" height={150} width={150} />
    </Container>
  );
};

export default Loader;
