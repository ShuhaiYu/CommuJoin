import styled from 'styled-components';

export const Card = styled.div`
  display: block; // 确保卡片以块级元素显示
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0; // 仅设置垂直方向的外边距
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%; // 图片宽度自适应到卡片宽度
  height: 200px; // 设定一个固定高度或者使用百分比
  object-fit: cover; // 保证图片覆盖整个区域，不失真
`;


export const Title = styled.h3`
  color: #0056b3;
  margin-bottom: 15px;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  color: #555;
  margin-bottom: 15px;
  font-size: 1rem;
`;

export const Date = styled.p`
  color: #28a745;
  font-size: 0.9rem;
`;
