import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProfileContainer, SideNav, UserInfo, Avatar, UserName, UserEmail, Button } from '../styles/ProfileStyled';

import MyActivities from '../components/MyActivities';
import Favorites from '../components/Favorites';
import PublishActivity from '../components/PublishActivity';
import EditProfile from '../components/EditProfile';

// 定义用户类型
type User = {
    name: string;
    email: string;
    avatarUrl: string;
};

// 组件 props 的类型
type ProfileProps = {
    user: User;
};


const Profile: React.FC<ProfileProps> = ({ user }) => {
    const [activeSection, setActiveSection] = useState('userInfo');

  // 渲染不同的部分
  const renderSection = () => {
    switch (activeSection) {
      case 'my-activities':
        return <MyActivities />;
      case 'favorites':
        return <Favorites />;
      case 'publish':
        return <PublishActivity />;
      case 'edit-profile':
        return <EditProfile />;
      default:
        return (
          <UserInfo>
            <Avatar src={user.avatarUrl} alt={user.name} />
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
          </UserInfo>
        );
    }
  };

  return (
    <ProfileContainer>
      <SideNav>
        <Button onClick={() => setActiveSection('my-activities')}>我的活动</Button>
        <Button onClick={() => setActiveSection('favorites')}>收藏的活动</Button>
        <Button onClick={() => setActiveSection('publish')}>发布活动</Button>
        <Button onClick={() => setActiveSection('edit-profile')}>修改个人信息</Button>
        {/* 其他侧边导航链接 */}
      </SideNav>
      {renderSection()}
    </ProfileContainer>
  );
};

export default Profile;
