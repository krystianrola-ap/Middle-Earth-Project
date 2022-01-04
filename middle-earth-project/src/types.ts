export enum Journeys { 
    "HOBBIT" = "hobbit",
    "LORD_OF_THE_RINGS" = "lord-of-the-rings"
}

export interface IHeaderListItem { 
    title : string,
    url : string
}

export interface IMovie {
    id: string;
    title: string;
    author: string;
    genre: string[];
    releaseYear: string;
    summary: string[];
    movieURL: string;
    imageURL: string
}

export interface IMovieSummaries {
    movie: IMovie[];
}

export interface IMovieInfoAPI {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
}

export interface ICharacter {
    _id: string;
    height: string;
    race: string;
    gender: string;
    birth: string;
    spouse: string;
    death: string;
    realm: string;
    hair: string;
    name: string;
    wikiUrl: string;
}

export interface IDocs {
    docs: ICharacter[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}

export interface IJsonMovies {
    docs: IMovieInfoAPI[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
}