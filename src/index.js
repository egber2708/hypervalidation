import ReactDOM from "react-dom";
import App from "./App";
import "@cloudscape-design/global-styles/index.css";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />{" "}
  </QueryClientProvider>,
  document.getElementById("root")
);
