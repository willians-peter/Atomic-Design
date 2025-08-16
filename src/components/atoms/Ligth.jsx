import React from 'react';

const Ligth = ({ type = 'sun' }) => {
  return `Ligth ${type}`;
};

export default Ligth;

/*import React from 'react';
import Ligth from './Ligth';

const App = () => {
  return (
    <div>
      <Ligth /> {/* Renderiza Ligth sun }
      <Ligth type="shade" /> {/* Renderiza Ligth shade }
    </div>
  );
};
