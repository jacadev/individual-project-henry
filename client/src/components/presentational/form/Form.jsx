import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = () => {
  const dbTemps = useSelector((state) => state.temperaments);
  const temps = [];
  dbTemps.map((elm, i) => temps.push({ text: elm, value: i + 1 }));

  const [tempSelected, setTempSelected] = useState({
    selected: [],
  });

  const [inputs, setInputs] = useState({
    name: "",
    lifeSpan: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    image: "",
    temperament: [],
  });

  const changeHandler = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    alert("Your dog breed has been successfully created");
    const bodyToSend = {
      name: inputs.name,
      life_span: inputs.lifeSpan,
      weight: `${inputs.weightMin} - ${inputs.weightMax}`,
      height: `${inputs.heightMin} - ${inputs.heightMax}`,
      image: inputs.image,
      temperament: tempSelected.selected,
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/dogs",
        bodyToSend
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setInputs({
      name: "",
      lifeSpan: "",
      weightMin: "",
      weightMax: "",
      heightMin: "",
      heightMax: "",
      image: "",
      temperament: [],
    });
  };

  const handleChangeTemp = (event) => {
    if (event.target.name === "temperament") {
      setInputs({
        ...inputs,
        [event.target.name]: [...inputs.temperament, event.target.value],
      });
    }
  };

  const handleRemoveTemp = (event) => {
    event.preventDefault();
    let aux = tempSelected.selected.filter(
      (elm) => elm !== tempSelected.selected.at(-1)
    );
    setTempSelected({
      ...tempSelected,
      selected: aux,
    });
  };

  const handleClickTemp = (event) => {
    event.preventDefault();
    if (event.target.name === "addTemp") {
      if (!tempSelected.selected.includes(inputs.temperament.at(-1))) {
        setTempSelected({
          ...tempSelected,
          selected: [...tempSelected.selected, inputs.temperament.at(-1)],
        });
        setInputs({ ...inputs, temperament: [...inputs.temperament] });
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Breed name:</label>
        <input
          required
          type="text"
          value={inputs.name}
          onChange={changeHandler}
          name="name"
          placeholder="i.e: Saint Bernard"
        />
      </div>

      <div>
        <label htmlFor="lifeSpan">Life Span:</label>
        <input
          required
          type="text"
          value={inputs.lifeSpan}
          onChange={changeHandler}
          name="lifeSpan"
          placeholder="i.e: 10 - 12 years"
        />
      </div>

      <label htmlFor="weightMin">Weight min - max:</label>
      <div className="min-max">
        <div>
          <input
            required
            type="number"
            value={inputs.weightMin}
            onChange={changeHandler}
            name="weightMin"
            placeholder="i.e: 8"
          />
        </div>
        <div> - </div>
        <div>
          <input
            required
            type="number"
            value={inputs.weightMax}
            onChange={changeHandler}
            name="weightMax"
            placeholder="i.e: 12"
          />
        </div>
      </div>

      <label htmlFor="heightMin">Height min - max:</label>
      <div className="min-max">
        <div>
          <input
            required
            type="number"
            value={inputs.heightMin}
            onChange={changeHandler}
            name="heightMin"
            placeholder="i.e: 2"
          />
        </div>
        <div> - </div>
        <div>
          <input
            required
            type="number"
            value={inputs.heightMax}
            onChange={changeHandler}
            name="heightMax"
            placeholder="i.e: 4"
          />
        </div>
      </div>

      <div>
        <label htmlFor="image">Image url:</label>
        <input
          required
          type="text"
          value={inputs.image}
          onChange={changeHandler}
          name="image"
          placeholder="i.e: https://www.myfavpet.com/cutedog.jpg"
        />
      </div>

      <div className="btn-temps">
        <div>
          <select
            required
            name="temperament"
            id="temps"
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

        <div>
          <button
            key="addTemp"
            className="btn-create"
            name="addTemp"
            onClick={handleClickTemp}
          >
            Add Temperament
          </button>
        </div>
        <div>
          <button
            key="btnCreate"
            className="btn-create"
            onClick={handleRemoveTemp}
          >
            Remove Temperament
          </button>
        </div>
      </div>
      {tempSelected.selected?.map((elm, i) => (
        <p key={i} className="elm-selected">
          {elm}
        </p>
      ))}
      <br />

      <button className="btn-submit" type="submit">
        Create Breed
      </button>
    </form>
  );
};

export default Form;
