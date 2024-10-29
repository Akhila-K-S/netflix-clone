import "./RowPost.css";
import { imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";
import { IRowPost } from "./RowPost.Type";
import { useState } from "react";
import { useAppSelector } from "../../constants/hooks";

const RowPost = ({ title, isSmall, data, onVideoClick }: IRowPost) => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 0 },
  };
  const { videoData, loading } = useAppSelector((state) => state.video);
  const [videoID, setVideo] = useState<string>("");
  const onMovieHandler = async (id: string) => {
    onVideoClick(id);
    if (loading) {
      setVideo(videoData[0].key);
    }
  };

  console.log(videoID, "=====videoID");

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {data?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => onMovieHandler(movie.id)}
            className={isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl}${movie.backdrop_path}`}
          />
        ))}
      </div>
      {/* {videoID !== null && <YouTube videoId={videoID} opts={opts} />} */}
    </div>
  );
};

export default RowPost;
