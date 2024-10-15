import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <GitProfile config={CONFIG} />,
  },
  {
    path: '/cv',
    loader: () => (window.location.href = '/resume.pdf'),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
