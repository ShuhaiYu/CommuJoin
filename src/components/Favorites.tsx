import React from 'react';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
  padding: 20px;
  // 添加更多样式
`;

const Favorites = () => {
  return (
    <FavoritesContainer>
      <h2>收藏的活动</h2>
      {/* 收藏活动列表 */}
    </FavoritesContainer>
  );
};

export default Favorites;