import { useEffect, useState } from "react";
import "./Banner.css";
import { getBannerData } from "../../redux-toolkit/reducers/bannerReducer";
import { imageUrl } from "../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../constants/hooks";

const Banner = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.banner.bannerData);
  const [bannerItem, setBannerItem] = useState<any>(null);

  useEffect(() => {
    dispatch(getBannerData({}));
  }, [dispatch]);

  useEffect(() => {
    if (data.length) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setBannerItem(data[randomIndex]);
    }
  }, [data]);

  return (
    <div
      style={{
        backgroundImage: `url(${
          bannerItem ? imageUrl + bannerItem.backdrop_path : ""
        })`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{bannerItem?.title} </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{bannerItem?.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
