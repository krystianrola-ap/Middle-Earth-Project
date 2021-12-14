export enum Journeys { 
    "HOBBIT" = "hobbit",
    "LORD_OF_THE_RINGS" = "lord-of-the-rings"
}

export interface IHeaderListItem { 
    title : string,
    url : string
}

export interface IMovieInfo {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
}

export interface IJsonMovies {
    docs: IMovieInfo[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
}