import React, { useState } from 'react';
import styled from 'styled-components';

const EditProfileContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 5px;
    color: #6c757d;
  }

  input {
    margin-bottom: 10px;
    padding: 12px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box; // 保证宽度包含内边距
  }

  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #218838;
    }
  }
`;

const EditProfile = () => {
  // 假设这是从后端获取的当前用户信息
  const currentUserInfo = { name: 'Jane Doe', email: 'jane.doe@example.com' };
  const [userInfo, setUserInfo] = useState(currentUserInfo);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // 发送更新的信息到后端 API
    console.log('更新的用户信息:', userInfo);
  };

  return (
    <EditProfileContainer>
      <h2>修改个人信息</h2>
      {/* 显示当前信息 */}
      <p>当前姓名: {currentUserInfo.name}</p>
      <p>当前邮箱: {currentUserInfo.email}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">新姓名</label>
        <input
          id="name"
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          placeholder="新姓名"
        />
        <label htmlFor="email">新邮箱</label>
        <input
          id="email"
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          placeholder="新邮箱"
        />
        <button type="submit">更新信息</button>
      </form>
    </EditProfileContainer>
  );
};

export default EditProfile;
