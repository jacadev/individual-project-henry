//import styles from "./Home.module.css";
import CardsContainer from "../../containers/dog-cards/DogCardsContainer.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  filterByName,
  filterByTemp,
  getTemperaments,
  filterByWeight,
  isCreated,
  filterByOrder,
  setPage
} from "../../redux/actions";

const Home = () => {
  const dbTemps = useSelector((state) => state.temperaments);
  const dogsState = useSelector((state) => state.dogs);
  const page = useSelector((state) => state.page);
  const temps = [];
  dbTemps.map((elm, i) => temps.push({ text: elm, value: i + 1 }));

  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    searchValue: "",
  });

  useEffect(() => {
    dispatch(getDogs(page));  
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const changeSearchHandler = (event) => {
    setSearch({
      ...search,
      searchValue: event.target.value,
    });
  };

  const submitSearchHandler = (event) => {
    event.preventDefault();
    dispatch(filterByName(search.searchValue));
  };

  const [tempSelect, setTempSelect] = useState({
    selected: "",
  });

  const handleChangeTemp = (event) => {
    setTempSelect({
      selected: event.target.value,
    });
  };

  const handleFilterTemp = (event) => {
    event.preventDefault();
    dispatch(filterByTemp(tempSelect.selected));
  };

  const [ weight, setWeight] = useState({
    weightSelected: "",
  });

  const handleChangeWeight = (event) => {
    setWeight({
      weightSelected: event.target.value,
    });
  };

  const handleFilterWeight = (event) => {
    event.preventDefault();
    dispatch(filterByWeight(weight.weightSelected));
  };

  const [ created, setCreated ] = useState({
    created: "",
  });

  const handleChangeCreated = (event) => {
    setCreated({
      created: event.target.value,
    });
  };

  const handleFilterCreated = (event) => {
    event.preventDefault();
    dispatch(isCreated(created.created));
  };

  const [ order, setOrder ] = useState({
    ordered: "",
  });

  const handleChangeOrder = (event) => {
    setOrder({
      ordered: event.target.value,
    });
  };

  const handleFilterOrder = (event) => {
    event.preventDefault();
    dispatch(filterByOrder(order.ordered));
  };

  const handleFilterReset = (event) => {
    event.preventDefault();
    dispatch(getDogs(0));
  }
  
  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  }

  const handleNextPage = () => {
    if (page < dogsState.length) {
      dispatch(setPage(page + 1));
    }
  }

  return (
    <div className="home-view">
      <div className="sidebar">
        <h2>Filters</h2>
        <hr />
        <h5>Filter by breed name</h5>
        <form onSubmit={submitSearchHandler} className="form-div">
          <div className="div-input">
            <input
              required
              type="text"
              value={search.searchValue}
              onChange={changeSearchHandler}
              name="searchValue"
              placeholder="i.e: Husky"
            />
          </div>
          <div className="btn-search">
            <button className="btn-submit" type="submit">
              Search
            </button>
          </div>
        </form>
        <h5>Filter by temperament</h5>
        <div className="cont-temp">
          <div className="filter-temp">
            <select
              name="temperament"
              className="cmb-box"
              onChange={handleChangeTemp}
            >
              <option key="200" value="None" defaultValue="None">
                Choose...
              </option>
              {temps?.map((elm, i) => {
                return (
                  <option key={i} id={elm.value} value={elm.text}>
                    {elm.text}{" "}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btn-filter-temp">
            <button onClick={handleFilterTemp}>GO</button>
          </div>
        </div>
        <h5>Filter by weight</h5>
        <div className="cont-temp">
          <div className="filter-temp">
            <select
              name="weight"
              className="cmb-box"
              onChange={handleChangeWeight}
            >
              <option key="0" value="None" defaultValue="None">
                Choose...
              </option>
              <option key="1" value="lighter">
                Lighter
              </option>
              <option key="2" value="heavier">
                Heavier
              </option>
            </select>
          </div>
          <div className="btn-filter-temp">
            <button onClick={handleFilterWeight}>GO</button>
          </div>
        </div>
        <h5>Filter by origin of creation</h5>
        <div className="cont-temp">
          <div className="filter-temp">
            <select
              name="creation"
              className="cmb-box"
              onChange={handleChangeCreated}
            >
              <option key="0" value="None" defaultValue="None">
                Choose...
              </option>
              <option key="1" value="db">
                Own
              </option>
              <option key="2" value="api">
                External
              </option>
            </select>
          </div>
          <div className="btn-filter-temp">
            <button onClick={handleFilterCreated}>GO</button>
          </div>
        </div>
        <h5>Filter by alphabetical order</h5>
        <div className="cont-temp">
          <div className="filter-temp">
            <select
              name="alphabetical"
              className="cmb-box"
              onChange={handleChangeOrder}
            >
              <option key="0" value="None" defaultValue="None">
                Choose...
              </option>
              <option key="1" value="asc">
                A to Z
              </option>
              <option key="2" value="desc">
                Z to A
              </option>
            </select>
          </div>
          <div className="btn-filter-temp">
            <button onClick={handleFilterOrder}>GO</button>
          </div>
        </div>
        <hr />
        <div className="btn-reset">
        <button onClick={handleFilterReset}>Reset Filters</button>
        </div>
      </div>
      <div className="content">
        <CardsContainer />
        <div className="btn-pagination">
          <button onClick={handlePrevPage}> Previous Page </button>
          <button onClick={handleNextPage}> Next Page </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
