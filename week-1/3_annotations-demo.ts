let movieTitle: string = "Interstellar";
let releaseYear: number = 2014;
let isSciFi: boolean = true;

function getMovieRelease(title: string, year: number): string {
    return `${title} is a movie released in ${year}.`;
}

let leadActors: string[] = ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Matt Damon"];
const summary: string=getMovieRelease(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a Sci-Fi movie? ${isSciFi ? "Yes" : "No"}`);