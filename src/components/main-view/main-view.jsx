import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((response) => response.json())
      .then((data) => {
        const movieFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: doc.image,
            director: doc.director,
          };
        });
        setMovies(movieFromApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => {
            setSelectedMovie(movie);
          }}
        />
      ))}
    </div>
  );
};

MainView.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
};