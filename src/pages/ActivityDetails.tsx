import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailsContainer, Title, JoinButton, PublisherInfo, FavoriteButton, Description, Details, ChargeInfo, ActivityImage, BackButton } from '../styles/ActivityDetailsStyled';

const ActivityDetails = () => {
    const navigate = useNavigate();
    const { activityId } = useParams();

    const handleBackClick = () => {
        navigate('/');
      };

    // 假设从 API 获取数据，这里暂时用占位数据
    const activityDetails = {
        title: '活动标题',
        publisher: '用户名',
        description: '这里是活动的详细描述...',
        location: '地址',
        charge: '免费/￥金额',
        imageUrl: 'https://via.placeholder.com/400'
    };

    return (
        <DetailsContainer>
            <BackButton onClick={handleBackClick}>返回主页</BackButton>
            <ActivityImage src={activityDetails.imageUrl} alt={activityDetails.title} />
            <Title>{activityDetails.title}</Title>
            <PublisherInfo>
                <p>发布者: {activityDetails.publisher}</p>
            </PublisherInfo>
            <JoinButton>加入活动</JoinButton>
            <FavoriteButton>添加到收藏</FavoriteButton>
            <Description>{activityDetails.description}</Description>
            <Details>
                <p>出发地点: {activityDetails.location}</p>
                <ChargeInfo>收费情况: {activityDetails.charge}</ChargeInfo>
            </Details>
        </DetailsContainer>
    );
};

export default ActivityDetails;
