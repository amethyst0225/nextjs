import {API_URL} from "../../../(home)/page";
import MovieCredits from "../../../../components/movie-credits";

export default async function MovieDetail({params: {id},}){
	return (
	<div>
		<MovieCredits id={id}/>
	</div>
	);
}