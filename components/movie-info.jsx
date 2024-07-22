
import styles from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";
import Link from "next/link";

async function getMovie(id){
	await new Promise((resolve) => setTimeout(resolve, 5000));
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
}

export default async function MovieInfo({id}){
	const movie = await getMovie(id);

	return <div className={styles.container}>
		<img src={movie.poster_path} className={styles.poster} alt={movie.title} />
		<div className={movie.info}>
			<h1 className={movie.title}>{movie.title}</h1>
			<h3>⭐️{movie.vote_average.toFixed(1)}</h3>
			<p>{movie.overview}</p>
			<a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
			<div>
				<a href={`/movies/${id}/credits`}>credits</a>
			</div>
		</div>
	</div>;
}