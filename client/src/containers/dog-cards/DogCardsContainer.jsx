import Card from "../../components/presentational/dog-card/DogCard.jsx";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const dogs = useSelector((state) => state.dogs);

  return (
    <div className="dog-card-container">
      {dogs.map((dog) => {
        return (
          <Card key={dog.id} id={dog.id} name={dog.name} image={dog.image} weight={dog.weight} temperament={dog.temperament}/>
        );
      })}
    </div>
  );
};

export default CardsContainer;
