import { IMovie, IMovieInfoAPI } from "../../types";
import {
  FiBox,
  FiDollarSign,
  FiAward,
  FiStar,
  FiClock,
  FiBook,
  FiUploadCloud,
  FiGrid,
} from "react-icons/fi";
import { MovieInformationItem } from "./MovieInformationItem";

const infoStyle :string = `w-full`;

interface MovieInformationProps {
  chosenMovie: IMovie;
  api_data: IMovieInfoAPI;
}

export const MovieInformation = ({
  chosenMovie,
  api_data,
}: MovieInformationProps) => {


  const GetGenresString = () => {
    let genres: string = "- ";
    chosenMovie?.genre.forEach((genre) => {
      let adjustedString = genres + genre + " - ";

      genres = adjustedString;
    });
    console.log(genres);
    return genres;
  };

  return (
    <div className={infoStyle}>
      <MovieInformationItem
        itemIcon={<FiGrid />}
        itemTitle="Genre: "
        itemInfo={GetGenresString()}
      />
      <MovieInformationItem
        itemIcon={<FiUploadCloud />}
        itemTitle="Release Year: "
        itemInfo={chosenMovie?.releaseYear}
      />
      <MovieInformationItem
        itemIcon={<FiClock />}
        itemTitle="Runtime: "
        itemInfo={String(api_data!.runtimeInMinutes) + " min."}
      />
      <MovieInformationItem
        itemIcon={<FiDollarSign />}
        itemTitle="Budget: "
        itemInfo={String(api_data!.runtimeInMinutes) + " mln."}
      />
      <MovieInformationItem
        itemIcon={<FiBox />}
        itemTitle="Box Office Revenue: "
        itemInfo={String(api_data!.boxOfficeRevenueInMillions) + " mln."}
      />
      <MovieInformationItem
        itemIcon={<FiStar />}
        itemTitle="Award Nominations:"
        itemInfo={String(api_data!.academyAwardNominations)}
      />
      <MovieInformationItem
        itemIcon={<FiAward />}
        itemTitle="Academy Award Wins:"
        itemInfo={String(api_data!.academyAwardWins)}
      />
      <MovieInformationItem
        itemIcon={<FiBook />}
        itemTitle="Novel by:"
        itemInfo={chosenMovie?.author}
      />
    </div>
  );
};
