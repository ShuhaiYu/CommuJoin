import React from 'react';
import { Activity, User } from '../types';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
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

// 假设有一个函数可以根据 ID 获取收藏的活动详情
const getFavoriteActivityById = (id: string): Activity => {
  // 这里应该是一个 API 调用，目前我们返回模拟数据
  return {
    id,
    title: `收藏活动 ${id}`,
    description: `这是收藏活动 ${id} 的描述。`,
  };
};

const Favorites = () => {
  // 模拟数据
  const favoriteActivities = [
    { id: 3, title: '城市马拉松', description: '参加年度城市马拉松比赛。' },
    // ...其他收藏活动
  ];

  return (
    <FavoritesContainer>
      <h2>收藏的活动</h2>
      {favoriteActivities.map(activity => (
        <div key={activity.id}>
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
        </div>
      ))}
    </FavoritesContainer>
  );
};

export default Favorites;