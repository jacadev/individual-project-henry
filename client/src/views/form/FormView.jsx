import FormContainer from "../../containers/form/FormContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTemperaments } from "../../redux/actions";

const FormView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div className="form-view">
      <FormContainer />
    </div>
  );
};

export default FormView;
