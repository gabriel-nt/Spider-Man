import Link from 'next/link';
import { useCallback, useState } from 'react';

import { Container, Mobile, Menu } from './styles';

const HeaderMobile: React.FC = () => {
  const [effect, setEffect] = useState('');

  const handleClickCheckbox = useCallback(() => {
    if (!effect || effect === 'fadeOut') {
      setEffect('fadeIn');
    } else {
      setEffect('fadeOut');
    }
  }, [effect]);

  return (
    <Container>
      <input id="hamburguer" type="checkbox" onChange={handleClickCheckbox} />

      <label htmlFor="hamburguer">
        <Mobile />
      </label>

      <Menu effect={effect}>
        <ul>
          <li>
            <Link href="/index">Home</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/characters">Personagens</Link>
          </li>
          <li>
            <Link href="/costumes">#Trajes</Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default HeaderMobile;
