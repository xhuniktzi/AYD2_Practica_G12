import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/auth/Login';
import Dashboard from './routes/Dashboard/Dashboard';
import Clients from './routes/Clients/Clients';
import Citas from './routes/Citas/Citas';
import ErrorPage from './routes/error';
import DashboardAbogado from './routes/Dashboard/DashboardAbogado';
import AgregarExpediente from './routes/abogado/AgregarExpediente';
import VerDocumento from './routes/abogado/VerDocumento';
import ActualizarEstado from './routes/abogado/ActualizarEstado';

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
    element: <DashboardAbogado />
  },
  {
    path: "/agregar-expediente",
    element: <AgregarExpediente />
  },
  {
      path: "/ver-documento",
      element: <VerDocumento />
  },
  {
      path: "/actualizar-estado",
      element: <ActualizarEstado />
  },
  {
    path: "/clients",
    element: <Clients />
  },
  {
    path: "/appointments",
    element: <Citas />
  },
  // Aquí se agregan las rutas para los demás componentes de la aplicación.
  // Puedes agregar más rutas para otras funcionalidades, como agendar citas y gestionar expedientes.
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
