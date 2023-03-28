import DogDetail from "../../components/presentational/dog-detail/DogDetail.jsx";
import { useSelector } from "react-redux";

const DogDetailContainer = () => {
  const { name, life_span, temperament, weight, height, image } = useSelector(
    (state) => state.dogDetail
  );
  return (
    <div className="dog-detail-container">
      <DogDetail
        name={name}
        life_span={life_span}
        temperament={temperament}
        weight={weight}
        height={height}
        image={image}
      />
    </div>
  );
};

export default DogDetailContainer;
