import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    expect(screen.getByText(/details/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /summary/i }, { level: 2 })).toBeInTheDocument();
  });
  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    expect(screen.getByRole('heading', { name: /game locations of pikachu/i }, { level: 2 })).toBeInTheDocument();
    expect(screen.getAllByRole('img')[1].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(screen.getAllByRole('img')[1].alt).toBe('Pikachu location');
    expect(screen.getAllByRole('img')[2].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(screen.getAllByRole('img')[2].alt).toBe('Pikachu location');
  });
  test('Teste se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    expect(screen.getByLabelText('Pokémon favoritado?')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
