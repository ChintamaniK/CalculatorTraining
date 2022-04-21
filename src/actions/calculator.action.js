
export const calculateResults = (equation) => async dispatch => {
  try {
    const result = (eval(equation));
    dispatch({ type: "CALCULATION_SUCCESS", payload: result });

  } catch (error) {
    dispatch({ type: "CALCULATION_ERROR" });
  }
} 