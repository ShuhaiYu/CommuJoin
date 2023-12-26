import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SideNav = styled.nav`
  width: 200px;
  min-height: 100vh;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa; // 添加背景颜色
`;

export const UserInfo = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: white; // 添加背景颜色
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #007bff;
  margin-bottom: 20px;
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const UserEmail = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: transparent;
  border: none;
  text-align: left;
  color: #007bff;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }
`;
