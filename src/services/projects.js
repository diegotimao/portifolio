import pixelsImage from '../assets/palet.svg';
import recipes from '../assets/recipes.svg';
import trybetunes from '../assets/tunes.svg';
import trivia from '../assets/trivia.svg';

const projects = [
  {
    image: trybetunes,
    title: 'MusicFy',
    description: 'Explore seus álbuns e artistas favoritos em uma interface intuitiva que permite ouvir prévias das músicas diretamente na aplicação. Perfeito para entusiastas de música que buscam descobrir novos ritmos e sons.',
    urlPreviwer: 'https://music-songs.vercel.app/',
    urlCode: 'https://github.com/diegotimao/music-songs',
  },
  {
    image: trivia,
    title: 'Jogo de Trivia',
    description: 'Desafie seus conhecimentos com um jogo dinâmico de perguntas e respostas. A pontuação é calculada em tempo real, e você pode competir com outros jogadores em um ranking interativo.',
    urlPreviwer: 'https://jogo-trivia-sandy.vercel.app/',
    urlCode: 'https://github.com/diegotimao/jogo-trivia',
  },
  {
    image: recipes,
    title: 'Recipes App',
    description: 'Descubra uma ampla variedade de receitas de comidas e bebidas com este aplicativo desenvolvido em React e Redux. Ideal para quem gosta de explorar novas receitas com praticidade.',
    urlPreviwer: 'https://recipes-app-red-eight.vercel.app/foods',
    urlCode: 'https://github.com/diegotimao/recipes-app',
  },
  {
    image: pixelsImage,
    title: 'Pixels Arte',
    description: 'Crie obras de arte pixeladas com uma paleta de cores personalizável usando apenas JavaScript puro. Este projeto destaca a manipulação de eventos e funções nativas do JavaScript para uma experiência criativa.',
    urlPreviwer: 'https://trybe-projeto-pixels-art.vercel.app/',
    urlCode: 'https://github.com/diegotimao/trybe-projeto-pixels-art',
  }
];


export default projects;