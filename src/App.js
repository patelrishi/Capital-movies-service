import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import Routes from "./Routes";
import { useHistory } from "react-router";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <div className="App">
          <div>
            <Routes />
          </div>
        </div>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
