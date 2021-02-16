import { Container } from './styles';

interface ITooltipProps {
  message?: string;
}

const Tooltip: React.FC<ITooltipProps> = ({ message }) => (
  <Container className="tooltip">
    <span>{message ? message : '-'}</span>
  </Container>
);

export default Tooltip;
