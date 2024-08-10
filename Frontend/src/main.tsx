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
        path: "/actualizar-cliente/:id",
        element: <ActualizarCliente />
    },
    {
        path: "/clientes",
        element: <Clientes />
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
