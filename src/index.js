import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Card from './Card/Card';
import MatchPage from './MatchPage/MatchPage';
import { RecoilRoot } from 'recoil';
import AboutPage from './Podcast/Podcast';
import RightSection from './Section/RightSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
      element: <App />,
      path: '/',
    },
    {
      element: <Card />,
      path: '/Card',
    },
    {
      element: <MatchPage />,
      path: '/MatchPage/:id',
    },
    {
      element: <AboutPage />,
      path: '/Podcast',
    },
    {
      element: <RightSection />,
      path: '/RightSection',
    },

  ]);
root.render(
    <RecoilRoot>
<RouterProvider router={router} />
</RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
