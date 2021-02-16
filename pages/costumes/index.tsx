import { useRef, useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

import db from '../../db';

import Header from '../../src/components/Header';
import ImgBackground from '../../src/components/ImgBackground';

import costumeImg from '../../src/assets/costumes.png';

import { Container, NavigationIcons, Title } from './styles';
import Carousel from 'components/Carousel';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const customesRef = useRef<HTMLHeadingElement>(null);
  const conceptsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeline = new TimelineMax();

    if (
      headerRef.current &&
      containerRef.current &&
      title1Ref.current &&
      customesRef.current &&
      title2Ref.current &&
      conceptsRef.current
    ) {
      timeline
        .fromTo(
          headerRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
        )
        .fromTo(
          containerRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          title1Ref.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          customesRef.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          title2Ref.current,
          0.7,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, ease: Expo.easeInOut },
          '-=.5',
        )
        .fromTo(
          conceptsRef.current,
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
      <Container ref={containerRef}>
        <Title ref={title1Ref}>
          <div></div>
          <h2>Trajes de Miles Morales</h2>
          <div></div>
        </Title>

        <NavigationIcons>
          <TiChevronLeft className="prev-slider-1" />
          <TiChevronRight className="next-slider-1" />
        </NavigationIcons>

        <Carousel
          data={db.costumes}
          type="costume"
          ref={customesRef}
          pagination={{
            prevEl: '.prev-slider-1',
            nextEl: '.next-slider-1',
          }}
        />

        <Title ref={title2Ref}>
          <div></div>
          <h2>Concepts para novos Trajes</h2>
          <div></div>
        </Title>

        <NavigationIcons>
          <TiChevronLeft className="prev-slider-2" />
          <TiChevronRight className="next-slider-2" />
        </NavigationIcons>

        <Carousel
          data={db.concepts}
          type="concept"
          ref={conceptsRef}
          pagination={{
            prevEl: '.prev-slider-2',
            nextEl: '.next-slider-2',
          }}
        />
      </Container>
      <ImgBackground image={costumeImg} />
    </>
  );
};

export default Home;
