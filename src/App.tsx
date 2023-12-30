// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import ActivityDetails from './pages/ActivityDetails';

const mockUser = {
  name: '张三',
  email: 'zhangsan@example.com',
  avatarUrl: 'https://via.placeholder.com/150',
  activitiesId: ['1', '2', '3'],
  favoritesId: ['2', '4'],
};

const App = () => {
  return (
    <Router>
      <NavBar user={mockUser} /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/profile" element={<Profile user={mockUser} />} /> 
        <Route path="/activity/:activityId" element={<ActivityDetails />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {/* 其他路由 */}
      </Routes>
    </Router>
  );
};

export default App;
