import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Pokedex from '../pages/Pokedex';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste', () => {
  });
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById pokemonList />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Encountered Pokémon/i);
  });
  test('O botão deve conter o texto Próximo Pokémon', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById pokemonList />);
    expect(screen.getByRole('button', { name: /próximo pokémon/i })).toHaveTextContent(/Próximo Pokémon/i);
  });
  test('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById pokemonList />);
    expect(screen.getAllByTestId('pokemon-name').length).toBe(1);
  });
  test('Os próximos Pokémon da lista devem ser mostrados ao clicar sucessivamente no botão', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById pokemonList />);

    expect(pokemonList[0].name).toBeInTheDocument();
    expect(pokemonList[1].name).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));
    expect(pokemonList[0].name).not.toBeInTheDocument();
    expect(pokemonList[1].name).toBeInTheDocument();
  });
  test('O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById pokemonList />);

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));
    expect(screen.getByText('Charmander')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById pokemonList />);

    expect(screen.getAllByTestId('pokemon-type-button')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: btn.innerHTML })).toBeInTheDocument();
  });
});
