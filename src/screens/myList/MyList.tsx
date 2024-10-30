import { useEffect } from "react";
import { getOriginalsData } from "../../redux-toolkit/reducers";
import { useAppDispatch, useAppSelector } from "../../constants/hooks";
import RowPost from "../../components/rowPost/RowPost";

import "./MyList.css";

const MyList = () => {
    const dispatch = useAppDispatch();
    const originalsPosts = useAppSelector((state) => state.originals.originalsData);
    useEffect(() => {
        dispatch(getOriginalsData({}));
    }, [dispatch]);

    return (
        <div>
            <RowPost data={originalsPosts} title={"Netflix Originals"} />
        </div>
    );
};

export default MyList;
