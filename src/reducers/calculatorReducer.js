
const defaultstate = {
  result: '',
}

export const calcReducer = (state = defaultstate, action) => {
  if (action.type === "CALCULATION_SUCCESS") {
    return { result: action.payload };
  } else if (action.type === "CALCULATION_ERROR") {
    return { result: "ERROR" };
  }
  return defaultstate;

}