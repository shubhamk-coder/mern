export const addStep = (state = 0, action) => {
  switch (action.type) {
    case "AddStep":
      return state + 1;
    case "ResetStep":
      return 0;
    default:
      return state;
  }
};

export default addStep;
