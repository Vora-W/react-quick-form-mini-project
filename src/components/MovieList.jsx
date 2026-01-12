function MovieList({ movies, selectedMovie, onChange, error }) {
  return (
    <div className={`w-full flex flex-col items-start justify-evenly gap-7 font-normal mt-4 mb-2 ${error ? "border border-red-500 p-5 rounded-md" : ""}`}>
      {movies.map((movie) => (
        <label key={movie.title}>
          <input
            type="radio"
            id={movie.title}
            name="movie"
            value={movie.title}
            checked={selectedMovie === movie.title}
            onChange={onChange}
            className="align-bottom size-4"
          />
          <span className="px-2">{movie.title} ({movie.year})</span>
          <p className="text-gray-500 px-6">Director: {movie.director}</p>
        </label>
      ))}
    </div>
  );
}

export default MovieList;
