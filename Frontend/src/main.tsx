import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/auth/Login';
import Dashboard from './routes/Dashboard/Dashboard';
import DashboardAbogado from './routes/Dashboard/DashboardAbogado';
import AgregarCliente from './routes/asistente/AgregarCliente';
import ActualizarCliente from './routes/asistente/ActualizarClient';
import Clientes from './routes/asistente/Clientes';
import ErrorPage from './routes/error';
import AgregarExpediente from './routes/abogado/AgregarExpediente';
import VerDocumento from './routes/abogado/VerDocumento';
import ActualizarEstado from './routes/abogado/ActualizarEstado';
import Citas from './routes/Citas/Citas';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
      path: "/dashboard-abogado",
      element: <DashboardAbogado />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
   
    {
        path: "/agregar-cliente",
        element: <AgregarCliente />
    },
    {
        path: "/agregar-expediente",
        element: <AgregarExpediente />
    },
    {
        path: "/actualizar-cliente/:id",
        element: <ActualizarCliente />
    },
    {
        path: "/clientes",
        element: <Clientes />
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
        path: "/appointments",
        element: <Citas />
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
