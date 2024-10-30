import { useEffect } from "react";
import { getRomanticData } from "../../redux-toolkit/reducers";
import { useAppDispatch, useAppSelector } from "../../constants/hooks";
import RowPost from "../../components/rowPost/RowPost";

import "./Series.css";

const Series = () => {
    const dispatch = useAppDispatch();
    const romanticPosts = useAppSelector((state) => state.romantics.romanticData);
    useEffect(() => {
        dispatch(getRomanticData({}));
    }, [dispatch]);

    return (
        <div className="App">
            <RowPost data={romanticPosts} title={"Romantic Movies"} isSmall />
        </div>
    );
};

export default Series;
