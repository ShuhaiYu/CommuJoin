import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImage, Title, Description, Date } from '../styles/ActivityCardStyled';

interface ActivityCardProps {
  id: string; // 假设每个活动都有一个唯一的 ID
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ id, title, description, date, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/activity/${id}`); // 导航到活动详情页面
  };

  return (
    <Card onClick={handleClick}>
      <CardImage src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Date>{date}</Date>
    </Card>
  );
};

export default ActivityCard;
