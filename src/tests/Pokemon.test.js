import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Pokemon from '../components/Pokemon';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<Pokemon pokemon={ pokemonList[0] } showDetailsLink isFavorite />);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Average weight: 6.0 kg')).toBeInTheDocument();
    expect(screen.getByText('Electric')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /pikachu sprite/i }).src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    // expect(screen.getByRole('img')).toBeInTheDocument();
  });
  test('Teste se o card do Pokémon contém um link para exibir detalhes deste Pokémon.', () => {
    renderWithRouter(<Pokemon pokemon={ pokemonList[0] } showDetailsLink isFavorite />);
    expect(screen.getByRole('link', { name: /more details/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /more details/i }).href).toContain('/pokemon/25');
  });
  test('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    const { history } = renderWithRouter(<Pokemon
      pokemon={ pokemonList[0] }
      showDetailsLink
      isFavorite
    />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    expect(history.location.pathname).toBe('/pokemon/25');
  });
  // test('Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
  //   renderWithRouter(<Pokemon />);
  // });
  test('Teste se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<Pokemon pokemon={ pokemonList[0] } showDetailsLink isFavorite />);
    // userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByAltText(/is marked as favorite/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /is marked as favorite/i }).src).toContain('/star-icon.svg');
  });
});
