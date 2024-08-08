import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/auth/Login';
import Dashboard from './routes/Dashboard/Dashboard';
import Clients from './routes/Clients/Clients';
import ErrorPage from './routes/error';

// Configuración de rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/auth/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/clients",
    element: <Clients />
  },
  // Puedes agregar más rutas para otras funcionalidades, como agendar citas y gestionar expedientes.
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
