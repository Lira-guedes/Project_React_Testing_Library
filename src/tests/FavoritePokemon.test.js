import { screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <FavoritePokemon.js />', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemon />);
    expect(screen.getByText(/no favorite pokémon found/i)).toBeInTheDocument();
  });
  test('Teste se apenas são exibidos os Pokémon favoritados.', () => {
    const pikachu = [
      {
        id: 25,
        name: 'Pikachu',
        type: 'Electric',
        averageWeight: {
          value: '6.0',
          measurementUnit: 'kg',
        },
        image: 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png',
        moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
        foundAt: [
          {
            location: 'Kanto Viridian Forest',
            map: 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png',
          },
          {
            location: 'Kanto Power Plant',
            map: 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png',
          },
        ],
        summary: 'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
      }];
    renderWithRouter(<FavoritePokemon pokemonList={ pikachu } />);
    expect(screen.queryByText('Pikachu')).toBeInTheDocument();
  });
});
