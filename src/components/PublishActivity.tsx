import React, { useState } from 'react';
import styled from 'styled-components';

const PublishContainer = styled.div`
  


  form {
    display: flex;
    flex-direction: column;

    input, textarea {
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ced4da;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const PublishActivity = () => {
  const [activity, setActivity] = useState({ title: '', description: '' });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // 发送数据到后端 API
    console.log('发布的活动:', activity);
  };

  return (
    <PublishContainer>
      <h2>发布活动</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={activity.title}
          onChange={handleChange}
          placeholder="活动标题"
        />
        <textarea
          name="description"
          value={activity.description}
          onChange={handleChange}
          placeholder="活动描述"
        />
        <button type="submit">发布</button>
      </form>
    </PublishContainer>
  );
};

export default PublishActivity;
