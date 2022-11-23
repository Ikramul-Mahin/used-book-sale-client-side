
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./Route/routes";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="">
      <RouterProvider router={router}  >
        <ToastContainer></ToastContainer>
      </RouterProvider>
    </div>
  );
}

export default App;
