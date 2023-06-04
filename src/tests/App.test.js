import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('Teste se a aplicação é redirecionada para a página inicial,', () => {
    const { history } = renderWithRouter(<App />);
    const screenHome = screen.getByRole('link', { name: 'Home' });
    userEvent.click(screenHome);
    expect(history.location.pathname).toBe('/');
  });
  test('Teste se a aplicação é redirecionada para a página de About', () => {
    const { history } = renderWithRouter(<App />);
    const screenAbout = screen.getByRole('link', { name: 'About' });
    userEvent.click(screenAbout);
    expect(history.location.pathname).toBe('/about');
  });
  test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados', () => {
    const { history } = renderWithRouter(<App />);
    const screenFavorites = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(screenFavorites);
    expect(history.location.pathname).toBe('/favorites');
  });
  test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados', () => {
    const { history } = renderWithRouter(<App />);
    act(() => { history.push('/gfhdhfjh'); });
    const screenUnknow = screen.getByRole('heading', { name: /Not Found/i });
    expect(screenUnknow).toBeInTheDocument();
  });
});
