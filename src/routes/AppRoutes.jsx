
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ProjectDetail from '../pages/ProjectDetail'
import Services from '../pages/Skill'

const AppRoutes = () => {

    let router = createBrowserRouter([

         {
            path:'/',
            element:<MainLayout />,
            children:[
                {
                    path:'',
                    element:<Home />,
                },
                  
                 {
                    path:'projects',
                    element:<Projects />,
                },
                 {
                    path:'about',
                    element:<About />,
                },
                 {
                    path:'contact',
                    element:<Contact />,
                },
                 {
                    path:'project-detail/:id',
                    element:<ProjectDetail />,
                },
            ]
         }
    ])
  return (

        <RouterProvider router={router} />

  )
}

export default AppRoutes