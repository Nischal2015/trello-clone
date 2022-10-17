import { CardContainer } from '../../Styles';
import { CardProps } from './Card.d';

function Card({ text }: CardProps) {
  return <CardContainer>{text}</CardContainer>;
}

export default Card;
