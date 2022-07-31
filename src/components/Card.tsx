import { StyledCard } from "./styles/Card.styled";

interface CardProps {
  id: number;
  title: string;
  body: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, title, body, image }) => {
  return (
    <StyledCard direction={id % 2 === 0 ? "row-reverse" : "row"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="Card" />
      </div>
    </StyledCard>
  );
};

export default Card;
