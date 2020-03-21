import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const changeNumber = () => {
  number.innerText = store.getState();
};

store.subscribe(changeNumber);

const handleAdd = () => {
  store.dispatch({ type: ADD });
};

const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

plus.addEventListener("click", handleAdd, false);
minus.addEventListener("click", handleMinus, false);
