import { useRef, useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';

import { Container, Content, Features } from '../styles/pages/About';

import spiderman from '../assets/spider-man-2.png';
import logoMarvelImg from '../assets/logo-marvel.png';
import videoAbout from '../assets/spider-man-about.mp4';
import spidermanSee from '../assets/spider-man-see.jpg';
import spidermanJump from '../assets/spider-man-jump.jpg';
import spidermanFight from '../assets/spider-man-fight.jpg';

import Header from '../components/Header';
import VideoBackground from 'components/VideoBackground';

const About: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = new TimelineMax();

    if (
      logoRef.current &&
      headerRef.current &&
      contentRef.current &&
      featuresRef.current &&
      item1Ref.current &&
      item2Ref.current &&
      item3Ref.current
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
          contentRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          featuresRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          item1Ref.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          item2Ref.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          item3Ref.current,
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
        <div ref={logoRef} className="logoImg">
          <img src={logoMarvelImg} />
        </div>

        <Content ref={contentRef}>
          <img src={spiderman} />

          <div>
            <h1>Visão Geral do Jogo</h1>
            <p>
              Na mais nova aventura do universo de Marvel Spider-Man, o
              adolescente Miles Morales está se adaptando a um novo lar enquanto
              segue os passos de seu mentor, Peter Parker, como novo Spider-Man.
              {'\n'}
              Mas quando uma violenta disputa de forças ameaça destruir sua
              vizinhança, o aspirante a herói percebe que com grandes poderes
              também vêm grandes responsabilidades. Para salvar a Nova York da
              Marvel, Miles deve reconhecer e assumir o título de Spider-Man.
            </p>
          </div>
        </Content>

        <Features ref={featuresRef}>
          <h2>Recursos Principais</h2>
          <div>
            <div ref={item1Ref}>
              <img src={spidermanSee} alt="" />
              <h3>A trajetória de Miles Morales</h3>
              <p>
                Miles Morales descobre poderes incríveis e explosivos que o
                diferenciam de seu mentor, Peter Parker. Domine seus ataques
                Venom bioelétricos, poderes de camuflagem, truques espetaculares
                com teia, além de dispositivos e habilidades.
              </p>
            </div>

            <div ref={item2Ref}>
              <img src={spidermanFight} alt="" />
              <h3>Uma guerra pelo poder</h3>
              <p>
                Uma guerra pelo controle da Nova York da Marvel estourou entre
                uma empresa de energia desonesta e um exército criminoso de alta
                tecnologia. Com o seu novo lar ameaçado pelo conflito, Miles
                deve descobrir o preço de se tornar um herói.
              </p>
            </div>

            <div ref={item3Ref}>
              <img src={spidermanJump} alt="" />
              <h3>Um lar novo e vibrante</h3>
              <p>
                Atravesse as ruas cobertas de neve do animado e movimentado
                bairro de Miles enquanto ele se adapta à nova vizinhança. Quando
                os limites entre a sua vida pessoal e o combate ao crime começam
                a desaparecer, Miles descobre em quem pode confiar.
              </p>
            </div>
          </div>
        </Features>
      </Container>
      <VideoBackground video={videoAbout} />
    </>
  );
};

export default About;
