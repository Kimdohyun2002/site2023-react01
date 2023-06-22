import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import MovieSlider from "../movie/MovieSlider";
import MovieSearch from "../movie/MovieSearch";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";
import ContTitle from "../layout/ContTitle";

const MoviePage = () => {
    const [movies, setMovies] = useState([]);

    const search = async (query) => {
        await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=024457e42098387806b68e3dfaeb9203&query=${query}`
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=024457e42098387806b68e3dfaeb9203"
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <Contents>
            <ContTitle title="movie" />
            <MovieSlider movies={movies} />
            <MovieSearch onSearch={search} />
            <MovieTag />
            <MovieCont movies={movies} />
        </Contents>
    );
};

export default MoviePage;
