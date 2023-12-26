import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import ActivityCard from '../components/ActivityCard';
import { HomeContainer } from '../styles/HomeStyled';

const Home = () => {
  const activities = [
    {
      id: '1',
      title: '遛狗',
      description: '清晨的公园是散步的最佳去处。',
      date: '2023-12-25',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: '2',
      title: '社区读书会',
      description: '加入我们，分享你的故事，听听别人的故事。',
      date: '2024-01-05',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: '3',
      title: '周末烧烤',
      description: '带上你最喜欢的食材，我们提供烤架和音乐。',
      date: '2024-01-12',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: '4',
      title: '街头艺术创作',
      description: '我们在市中心创作壁画，来表达你的艺术吧！',
      date: '2024-02-20',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: '5',
      title: '慈善跑步',
      description: '为了一个好的事业，一起跑步并筹集善款。',
      date: '2024-03-15',
      imageUrl: 'https://via.placeholder.com/150'
    },
    // 其他活动数据...
  ];
  
  return (
    <>
      {/* <NavBar /> */}
      <HomeContainer>
        <h1>欢迎来到 CommuJoin</h1>
        <Row>
          {activities.map((activity, index) => (
            <Col md={4} key={index}>
              <ActivityCard
                id={activity.id}
                title={activity.title}
                description={activity.description}
                date={activity.date}
                imageUrl={activity.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </HomeContainer>
    </>
  );
};

export default Home;
