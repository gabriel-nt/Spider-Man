import Tilt from 'react-tilt';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';
import { FaPlaystation } from 'react-icons/fa';

import { Container, BackgroundLines, Buttons } from '../styles/pages/Home';

import Header from '../components/Header';
import Loading from '../components/Loading';
import VideoBackground from '../components/VideoBackground';

import BgLines from '../assets/lines.svg';
import MarvelImg from '../assets/marvel.svg';
import spiderMan from '../assets/spider-man.png';
import videoSpiderman from '../assets/spider-man.mp4';
import SpiderManTextImg from '../assets/spider-man-text.svg';

const Home: React.FC = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeline = new TimelineMax();

    if (
      loadingRef.current &&
      videoRef.current &&
      headerRef.current &&
      logoRef.current &&
      textRef.current &&
      buttonsRef.current &&
      imgRef.current
    ) {
      timeline
        .fromTo(
          loadingRef.current,
          1,
          { width: '100%' },
          { width: '0%', delay: 5, ease: Expo.easeInOut },
        )
        .fromTo(
          videoRef.current,
          0.7,
          { width: '0%', opacity: 0 },
          { width: '100%', opacity: 1, ease: Expo.easeInOut },
          '-=1',
        )
        .fromTo(
          headerRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          logoRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          textRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          buttonsRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          imgRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        );
    }
  }, []);

  return (
    <>
      <Loading ref={loadingRef} />
      <Header ref={headerRef} />

      <Container>
        <div ref={logoRef}>
          <div>
            <SpiderManTextImg />
          </div>
          <p ref={textRef}>
            Spider-Man: Miles Morales é um jogo da Insomniac Games, uma
            continuação direta do Marvel’s Spider-Man, game de 2018 que tinha
            Peter Parker como personagem principal e que introduziu Miles
            Morales ao universo dos videogames. Agora, Miles é a estrela do
            jogo, e se desenvolve como um herói muito interessante ao longo da
            história.
          </p>

          <Buttons ref={buttonsRef}>
            <a
              href="https://store.playstation.com/pt-br/concept/10000649"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre Agora
            </a>
            <Link href="/teaser">Veja o Teaser</Link>
          </Buttons>

          <div className="owners">
            <FaPlaystation />
            <MarvelImg />
          </div>
        </div>

        <div ref={imgRef}>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <img src={spiderMan} alt="" />
          </Tilt>
        </div>
      </Container>

      <BackgroundLines>
        <BgLines />
      </BackgroundLines>
      <VideoBackground ref={videoRef} video={videoSpiderman} />
    </>
  );
};

export default Home;
