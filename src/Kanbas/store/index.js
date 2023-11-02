import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
      <div>
      </div>
    </Provider>
  );
}
export default Kanbas;