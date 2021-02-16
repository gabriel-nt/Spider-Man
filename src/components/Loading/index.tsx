import { forwardRef } from 'react';
import { Container } from './styles';

import LoaderImg from '../../assets/loader.svg';

const Loading: React.ForwardRefRenderFunction<HTMLDivElement> = (
  { children },
  ref,
) => {
  return (
    <Container ref={ref}>
      <LoaderImg />
      {children}
    </Container>
  );
};

export default forwardRef(Loading);
