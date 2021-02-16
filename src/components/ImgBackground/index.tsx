import { forwardRef } from 'react';
import { Container } from './styles';

interface IImgBackgroundProps {
  image: string;
}

const ImgBackground: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IImgBackgroundProps
> = ({ image }, ref) => {
  return <Container ref={ref} image={image} />;
};

export default forwardRef(ImgBackground);
