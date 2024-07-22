import styles from '../../styles/home.module.css'; 
import Movie from '../../components/movie';

export const metadata = {
	title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies () {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	//return fetch(URL).then(response => response.json());
	/*위의 코드 한 줄은 아래 세 줄과 같음*/
	const response = await fetch(API_URL);
  	const json = await response.json();
  	return json;
}
//fetch한 데이터를 캐싱해주므로 다시 fetch 할 필요 x, 첫번째만 API에 요청함 

export default async function HomePage() {
	const movies = await getMovies();
	return (
	  <div className={styles.container}>
		{movies.map((movie) => (
		  <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
		))}
	  </div>
	);
  }