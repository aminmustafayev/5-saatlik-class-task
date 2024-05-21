import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Router } from "./Router/router";
import { DataContextProvider } from "./context/context";

const router = createBrowserRouter(Router)
function App() {

  return (
  <>
  <DataContextProvider>
  <RouterProvider router={router}/>
  </DataContextProvider>
  </>
  )
}

export default App
