import { BsFillLightningFill } from 'react-icons/bs';
import { FaCoins, FaTwitter, FaUserCircle, FaClock } from 'react-icons/fa';

import Tooltip from 'components/Tooltip';
import { Container, Details } from './styles';

interface ICardProps {
  data: {
    title?: string;
    description?: string;
    img: string;
    level?: string | number;
    fichas?: string | number;
    tweet?: string;
    user?: string;
    createdAt?: string;
  };
  type: 'costume' | 'concept';
}

const Card: React.FC<ICardProps> = ({ data, type }) => (
  <Container>
    <img src={data.img} />

    <Details>
      {type == 'costume' ? (
        <>
          <h1>{data.title}</h1>

          <div className="info">
            <div>
              <div>
                <FaCoins className="coins" />
                <span className="message">{data.fichas}</span>
                <Tooltip message="Fichas" />
              </div>
            </div>

            <div>
              <div>
                <BsFillLightningFill />
                <span className="message">{data.level}</span>
                <Tooltip message="Nível" />
              </div>
            </div>
          </div>

          <div className="description">
            <p>{data.description}</p>
            <Tooltip message={data.description} />
          </div>
        </>
      ) : (
        <>
          <ul>
            <li>
              <FaUserCircle />
              <span>{data.user}</span>
            </li>
            <li>
              <FaTwitter className="twitter" />
              <a href={data.tweet} target="_blank" rel="noopener noreferrer">
                Link do Tweet
              </a>
            </li>
            <li>
              <FaClock />
              <span>{data.createdAt}</span>
            </li>
          </ul>
        </>
      )}
    </Details>
  </Container>
);

export default Card;
