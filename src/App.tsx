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
  avatarUrl: 'https://via.placeholder.com/150'
};

const App = () => {
  return (
    <Router>
      <NavBar user={mockUser} /> {/* 添加 NavBar 并传入 mockUser */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* 注意这里是 element，不是 Component */}
        <Route path="/profile" element={<Profile user={mockUser} />} /> {/* 传递 mockUser 为 prop 到 Profile */}
        <Route path="/activity/:activityId" element={<ActivityDetails />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {/* 其他路由 */}
      </Routes>
    </Router>
  );
};

export default App;
