
import { RouterProvider } from "react-router-dom";
import router from "./Route/routes";
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="">
      <RouterProvider router={router}  >

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
