import { screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/details for each one/i)).toBeInTheDocument();
  });
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    expect(screen.getByRole('heading', { name: 'About Pokédex' }, { level: 2 })).toHaveTextContent(/about pokédex/i);
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/This application simulates/i)).toBeInTheDocument();
    expect(screen.getByText(/One can filter Pokémon/i)).toBeInTheDocument();
  });
  test('Teste se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    expect(screen.getByAltText(/pokédex/i)).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
