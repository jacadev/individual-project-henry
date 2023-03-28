import DogDetailContainer from "../../containers/dog-detail/DogDetailContainer.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  let { dogId } = useParams();

  useEffect(() => {
    dispatch(getDogDetail(dogId));
  }, [dispatch, dogId]);
  
  return (
    <div className="detail-view">
      <DogDetailContainer />
    </div>
  );
};

export default Detail;
