import { screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Page requested not found/i);
  });
  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByAltText(/not found/i)).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});
