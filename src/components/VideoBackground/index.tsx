import { forwardRef } from 'react';
import { Container } from './styles';

interface IVideoBackgroundProps {
  video: string;
}

const VideoBackground: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IVideoBackgroundProps
> = ({ video }, ref) => {
  return (
    <Container ref={ref}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </Container>
  );
};

export default forwardRef(VideoBackground);
