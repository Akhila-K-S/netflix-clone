import React, { useEffect } from "react";
import {
  getOriginalsData,
  getActionData,
  getRomanticData,
  getHorrorData,
  getVideoData,
} from "../redux-toolkit/reducers";
import { useAppDispatch, useAppSelector } from "../constants/hooks";
import RowPost from "../components/rowPost/RowPost";

import "./Home.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const originalsPosts = useAppSelector(
    (state) => state.originals.originalsData
  );
  const actionPosts = useAppSelector((state) => state.actions.actionData);
  const romanticPosts = useAppSelector((state) => state.romantics.romanticData);
  const horrorPosts = useAppSelector((state) => state.horrors.horrorData);
  useEffect(() => {
    dispatch(getOriginalsData({}));
    dispatch(getActionData({}));
    dispatch(getRomanticData({}));
    dispatch(getHorrorData({}));
  }, [dispatch]);

  const onClickVideo = (id: string) => {
    dispatch(getVideoData(id));
  };
  return (
    <div className="App">
      <RowPost
        data={originalsPosts}
        title={"Netflix Originals"}
        onVideoClick={(id) => onClickVideo(id)}
      />
      <RowPost
        data={actionPosts}
        title={"Action Movies"}
        isSmall
        onVideoClick={(id) => onClickVideo(id)}
      />
      <RowPost
        data={romanticPosts}
        title={"Romantic Movies"}
        isSmall
        onVideoClick={(id) => onClickVideo(id)}
      />
      <RowPost
        data={horrorPosts}
        title={"Horror Movies"}
        isSmall
        onVideoClick={(id) => onClickVideo(id)}
      />
    </div>
  );
};

export default Home;
