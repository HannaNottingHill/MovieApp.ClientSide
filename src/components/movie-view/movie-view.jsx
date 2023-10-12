export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img
          src={movie.image}
          alt={movie.title}
          style={{ width: "350px", height: "400px" }}
        />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
