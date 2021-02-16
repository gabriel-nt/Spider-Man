import { useRef, useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';

import { Container, Video, Title } from '../styles/pages/Teaser';

import LogoImg from '../../src/assets/spider-man-text.svg';
import teaserImg from '../../src/assets/spider-man-see.png';

import Header from '../components/Header';
import ImgBackground from '../components/ImgBackground';

const Teaser: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeline = new TimelineMax();

    if (
      videoRef.current &&
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
          videoRef.current,
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
          <h1>Confira o teaser</h1>
          <div className="border"></div>
        </Title>

        <Video ref={videoRef}>
          <iframe
            width="80%"
            height="100%"
            src="https://www.youtube.com/embed/T03PxxuCfDA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Video>
      </Container>
      <ImgBackground image={teaserImg} />
    </>
  );
};

export default Teaser;
