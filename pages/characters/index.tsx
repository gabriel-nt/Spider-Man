import { useRef, useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';

import { Container, Grid, Title } from './styles';

import LogoImg from '../../src/assets/spider-man-text.svg';
import charactersImg from '../../src/assets/characters.jpg';
import milesMoralesImg from '../../src/assets/characters/miles-morales.png';
import rioMoralesImg from '../../src/assets/characters/rio-morales.png';
import peterParkerImg from '../../src/assets/characters/peter-parker.png';
import gankeLeeImg from '../../src/assets/characters/ganke-lee.png';

import Header from '../../src/components/Header';
import ImgBackground from '../../src/components/ImgBackground';

const Characters: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeline = new TimelineMax();

    if (
      gridRef.current &&
      logoRef.current &&
      titleRef.current &&
      headerRef.current
    ) {
      timeline
        .fromTo(
          headerRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
        )
        .fromTo(
          logoRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          titleRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          gridRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        );
    }
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <Container>
        <div ref={logoRef}>
          <LogoImg />
        </div>

        <Title ref={titleRef}>
          <div className="border"></div>
          <h1>Conheça os personagens do jogo</h1>
          <div className="border"></div>
        </Title>

        <Grid ref={gridRef}>
          <div>
            <img src={milesMoralesImg} alt="Miles Morales" />
            <p>
              Miles Morales é o mais novo Spider-Man da Nova York da Marvel.
              Após a morte precoce do seu pai, Miles foi apresentado a Peter
              Parker, que rapidamente virou seu amigo e mentor. Quando Miles foi
              picado por uma aranha geneticamente modificada da Oscorp, ele
              desenvolveu poderes únicos e, após meses de insistência, Peter
              aceitou treiná-lo.
            </p>
            <p>Miles inicia o novo capítulo da sua vida no East Harlem</p>
          </div>
          <div>
            <img src={peterParkerImg} alt="Peter Parker" />
            <p>
              Peter Parker é o Spider-Man original e o mentor de Miles Morales
              como super-herói. Após a morte traumática do pai de Miles, Peter
              consegue um trabalho voluntário para Miles no F.E.S.T.A,
              desencadeando acidentalmente uma série de acontecimentos que
              deixaram Miles com poderes sobre-humanos comparáveis aos de Peter.
            </p>
            <p>Desde então, Peter ajuda Miles a controlar seus poderes.</p>
          </div>
          <div>
            <img src={gankeLeeImg} alt="Ganke Lee" />
            <p>
              Ganke Lee é o melhor amigo e confidente de Miles Morales. Ganke
              sempre morou no Harlem e estuda na Brooklyn Visions Academy, onde
              trabalha para se aprimorar como desenvolvedor de software e dar a
              Miles o apoio que ele tanto precisa. O app Spider-Man Amigo da
              Vizinhança do Ganke pretende revolucionar a maneira como os
              habitantes de Nova York interagem com super-heróis.
            </p>
          </div>
          <div>
            <img src={rioMoralesImg} alt="Rio Morales" />
            <p>
              Rio Morales é a mãe do Miles e uma candidata em ascensão na
              corrida eleitoral da Câmara Municipal de Nova York. Após a morte
              do pai do Miles, Rio e Miles se mudaram de volta para o East
              Harlem, onde ela nasceu e cresceu.
            </p>
            <p>
              Ela é uma defensora feroz da comunidade do bairro e sempre protege
              os interesses de seus amigos e vizinhos
            </p>
          </div>
        </Grid>
      </Container>
      <ImgBackground image={charactersImg} />
    </>
  );
};

export default Characters;
