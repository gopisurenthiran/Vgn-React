
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Values from '@/pages/Values'
import Chairman from '@/pages/Chairman'
import OurPeople from '../pages/OurPeople'
import Testimonial from '../pages/Testimonial'
import Contact from '@/pages/Contact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Layout includes Header and Footer
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
       { path: 'values', element: <Values /> },
       { path: 'chairman', element: <Chairman /> },
       { path: 'our-people', element: <OurPeople /> },
       { path: 'testimonial', element: <Testimonial /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
