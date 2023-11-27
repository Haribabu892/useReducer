import React, { useReducer } from "react";

const defaultState = {
  count: 0,
  isLoading: true,
};
const reducer = (state, action) => {
  if (action.type === "increase_count") {
    return { ...state, count: state.count + 1, isLoading: !state.isLoading };
  }
  throw new Error("eren yeager");
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div>
      {state.count}{" "}
      <button onClick={() => dispatch({ type: "increase_count" })}>
        increase count
      </button>
      {state.isLoading && <h2>heading 2</h2>}
    </div>
  );
};

export default App;
