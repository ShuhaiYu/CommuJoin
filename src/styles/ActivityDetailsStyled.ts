import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px; // 限制最大宽度
  margin: 40px auto; // 居中显示
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const JoinButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #218838;
  }
`;

export const FavoriteButton = styled(JoinButton)`
  background-color: #007bff;

  &:hover {
    background-color: #0069d9;
  }
`;

export const PublisherInfo = styled.div`
  margin: 20px 0;
  font-size: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

export const Details = styled.div`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const ChargeInfo = styled.p`
  color: #dc3545;
  font-weight: bold;
`;

export const ActivityImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  padding: 10px 15px;
  margin-bottom: 20px; // 与标题间的间距
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;