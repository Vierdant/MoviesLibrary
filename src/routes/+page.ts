import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const result = await fetch(
        'https://api.themoviedb.org/3/trending/all/week?api_key=8572332b22dea1573a8f28bd8d5a3cc8'
    );

    const data = await result.json();
    if(result.ok) {
        return {
            trending: data.results
        };
    }
};