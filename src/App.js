// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './components/Layout';

function App() {
  
  const isLoggedIn = localStorage.getItem('user');
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                isLoggedIn ? (
                  <DefaultLayout>
                    <route.component />
                  </DefaultLayout>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          ))}
          {/* Redirect to login page if no matching routes */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
