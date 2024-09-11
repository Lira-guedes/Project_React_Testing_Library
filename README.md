# RTL - React Testing Library
<h3>Projeto - Testes em React</h3>
<p>Este projeto tem como objetivo exercitar o desenvolvimento de testes automatizados em uma aplicação React, garantindo que todas as funcionalidades estejam corretas.</p>

<h3>O que será desenvolvido?</h3>
<ul>
  <li>Escrever testes automatizados utilizando a biblioteca <code>React Testing Library</code> e <code>Jest</code> para garantir a corretude da aplicação Pokédex.</li>
  <li>Desenvolver testes para verificar os requisitos implementados previamente no projeto da Pokédex.</li>
</ul>

<h3>Testes Implementados</h3>
  <h4>Teste do Componente FavoritePokemon.js:</h4>
<ul>
  <li>Testa se a mensagem "No favorite Pokémon found" é exibida quando não há Pokémon favoritado e se exibe corretamente os Pokémon marcados como favoritos.</li>
</ul>
  <h4>Teste do Componente NotFound.js:</h4>
<ul>
  <li>Verifica se a página "Not Found" exibe uma mensagem informando que a página solicitada não foi encontrada e se contém uma imagem apropriada para esse contexto.</li>
</ul>
  <h4>Teste do Componente Pokedex.js:</h4>
<ul>
  <li>Testa a exibição dos Pokémon na Pokédex, verificando a funcionalidade de avançar para o próximo Pokémon e a presença de filtros para os tipos de Pokémon.</li>
</ul>
  <h4>Teste do Componente Pokemon.js:</h4>
<ul>
  <li>Testa se as informações de um Pokémon específico são exibidas corretamente, incluindo link para detalhes e ícone de favorito quando aplicável.</li>
</ul>
  <h4>Teste do Componente PokemonDetails.js:</h4>
<ul>
  <li>Verifica se os detalhes do Pokémon selecionado são exibidos, junto com suas localizações no mapa, e se o usuário pode favoritar o Pokémon através dessa página.</li>
</ul>

<h3>Ferramentas Utilizadas</h3>
<ul>
  <li><code>React Testing Library</code> para testes de componentes React.</li>
  <li><code>Jest</code> para executar os testes automatizados.</li>
</ul>

<h3>Como executar o projeto?</h3>
<ul>
  <li>Clone o repositório:</li>
  <code>git clone https://github.com/seu-usuario/pokedex-tests.git</code>
  <li>Instale as dependências:</li>
  <code>npm install</code>
  <li>Execute os testes:</li>
  <code>npm test</code>
</ul>
