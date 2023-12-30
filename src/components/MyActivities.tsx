import React from 'react';
import { Activity, User } from '../types';
import { styled } from 'styled-components';

const ActivitiesContainer = styled.div`
  
  h2 {
    color: #007bff;
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 15px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

    h3 {
      color: #343a40;
    }

    p {
      color: #6c757d;
    }
  }
`;

// 假设有一个函数可以根据 ID 获取活动详情
const getActivityById = (id: string): Activity => {
  // 这里应该是一个 API 调用，目前我们返回模拟数据
  return {
    id,
    title: `活动 ${id}`,
    description: `这是活动 ${id} 的描述。`,
  };
};

// 定义传入的 user 属性的接口
interface MyActivitiesProps {
  user: User;
}

const MyActivities: React.FC<MyActivitiesProps> = ({ user }) => {
  // 模拟数据
  const activities = [
    { id: 1, title: '社区清洁', description: '加入我们清洁社区环境!' },
    { id: 2, title: '周末远足', description: '一起去山里探险吧！' },
    // ...其他活动
  ];

  return (
    <ActivitiesContainer>
      {/* 如果有用户信息，则显示 */}
      {user && (
        <div>
          <h3>用户信息</h3>
          <p>姓名: {user.name}</p>
          <p>邮箱: {user.email}</p>
          {/* 可能还有其他用户信息 */}
        </div>
      )}
      <h2>我的活动</h2>
      {/* 显示活动列表 */}
      {activities.map(activity => (
        <div key={activity.id}>
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
        </div>
      ))}
    </ActivitiesContainer>
  );
};

export default MyActivities;
