import { forwardRef } from 'react';
import { Container } from './styles';

import LoaderImg from '../../assets/loader.svg';

const Loading: React.ForwardRefRenderFunction<HTMLDivElement> = (
  props,
  ref,
) => {
  return (
    <Container ref={ref}>
      <LoaderImg />
    </Container>
  );
};

export default forwardRef(Loading);
