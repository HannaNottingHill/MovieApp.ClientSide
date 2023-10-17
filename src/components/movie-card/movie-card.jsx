import PropType from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onClick }) => {
  return (
    <Card onClick={() => onBookClick(book)}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};
