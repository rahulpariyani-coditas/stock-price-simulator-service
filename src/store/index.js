import { createStore } from "redux";
const initialState = [
  ["AALP", "120", "-", "now"],
  ["GOOGL", "2550", "-", "now"],
  ["TSLA", "699.10", "-", "now"],
  ["FB", "363.51", "-", "now"],
  ["BABA", "196.39", "-", "now"],
  ["NVDA", "203.66", "-", "now"],
  ["PYPL", "279.54", "-", "now"],
  ["DIS", "177.13", "-", "now"],
  ["NKE", "172.8", "-", "now"],
  ["INTC", "53.922550", "-", "now"],
];
const tickerReducer = (state = { tickerState: initialState }, action) => {
  if (action.type === "saveTicker") {
    return { ...state, tickerState: action.data };
  }
  return state;
};
const store = createStore(tickerReducer);

export default store;
