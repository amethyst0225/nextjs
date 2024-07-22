import { API_URL } from "../app/(home)/page";

async function getCredits(id) {
	const response = await fetch(`${API_URL}/${id}/credits`);
	return response.json();
  }

export default async function MovieCredits({id}){
	const credits = await getCredits(id);
	return (
		<div>
			{credits.map((credit) => (
				<div>
					<img src={credit.profile_path} />
					<p>{credit.original_name}</p>
					<p>{credit.character}</p>
				</div>
				)
			)}
		</div>
	  );
	}