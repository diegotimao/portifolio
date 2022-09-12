import pixelsImage from '../assets/palet.svg';
import recipes from '../assets/recipes.svg';
import trybetunes from '../assets/tunes.svg';
import trivia from '../assets/trivia.svg';

const projects = [
  {
    image: trybetunes,
    title: 'MusicFy',
    description: 'Pesquise por seus albuns e artistas favoritos, dá até para reproduzir uma prévia da música.',
    urlPreviwer: 'https://music-songs.vercel.app/',
    urlCode: 'https://github.com/diegotimao/music-songs',
  },
  {
    image: trivia,
    title: 'Trivia Api',
    description: 'Através desta aplicação o usuário pode ver comics card disponibilizados pela api da marvel e selecionar um endereço de entrega através no mapa geografico.',
    urlPreviwer: 'https://jogo-trivia-sandy.vercel.app/',
    urlCode: 'https://github.com/diegotimao/jogo-trivia',
  },
  {
    image: recipes,
    title: 'Recipes App',
    description: 'Aplicativo de receitas consumindo api de comidas e bebidas, desenvolvida em ResactJs ultilizando o redux.',
    urlPreviwer: 'https://recipes-app-red-eight.vercel.app/',
    urlCode: 'https://github.com/diegotimao/recipes-app',
  },
  {
    image: pixelsImage,
    title: 'Pixels arte',
    description: 'Paleta de cores, em javascript vanilha, com manipulação de eventos e funções puras do javascript.',
    urlPreviwer: 'https://trybe-projeto-pixels-art.vercel.app/',
    urlCode: 'https://github.com/diegotimao/trybe-projeto-pixels-art',
  }
];

export default projects;