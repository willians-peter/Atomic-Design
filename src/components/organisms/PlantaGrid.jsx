import React from 'react';
import { Grid } from '@mui/material';
import PlantaCard from '../molecules/PlantaCard';

const PlantaGrid = ({ plantas }) => {
  return (
    <Grid container spacing={2}>
      {plantas.map((planta) => (
        <Grid item xs={12} sm={6} md={4} key={planta.id} sx={{ display: 'flex', justifyContent: 'center' }}>
          <PlantaCard
            name={planta.name}
            imagem={planta.imagem}
            price={planta.price}
            categories={planta.categories}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlantaGrid