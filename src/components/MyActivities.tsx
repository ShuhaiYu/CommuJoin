import React from 'react';
import { styled } from 'styled-components';

const ActivitiesContainer = styled.div`
  padding: 20px;
  // 这里可以添加更多样式
`;

const MyActivities = () => {
  return (
    <ActivitiesContainer>
      {/* 这里可以添加显示用户活动的逻辑 */}
      <h2>我的活动</h2>
      {/* 活动列表 */}
    </ActivitiesContainer>
  );
};

export default MyActivities;
