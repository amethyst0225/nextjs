import {API_URL} from "../../(home)/page";
import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

export async function getMovie(id){
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
}

export async function generateMetadata({params: {id}}){
	const movie = await getMovie(id);
	return{
		title: movie.title, 
	};
}

export default async function MovieDetail({params: {id},}){

	return <div>
		<Suspense fallback={<h1>Loading movie info</h1>}>
			<MovieInfo id={id}/>
		</Suspense> 
		<Suspense fallback={<h1>Loading movie videos</h1>}>
			<MovieVideos id={id}/>
		</Suspense>
	</div>;
	//suspense: 로딩 상태를 분리할 수 있도록 함 
}