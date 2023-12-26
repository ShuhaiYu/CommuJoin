import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// 定义用户类型
type User = {
    name: string;
    email: string;
    avatarUrl: string;
};

// 组件 props 的类型
type NavBarProps = {
    user: User | null;
};


const Nav = styled.nav`
  background-color: #007bff;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const NavBar: React.FC<NavBarProps> = ({ user }) => {
    return (
        <Nav>
            <div>
                <NavItem to="/">CommuJoin</NavItem>
            </div>
            <div>
                {user ? (
                    <>
                        <Link to="/profile">
                            <UserAvatar src={user.avatarUrl} alt="Profile" />
                        </Link>
                        {/* 可以添加更多用户相关的链接 */}
                    </>
                ) : (
                    <>
                        <NavItem to="/login">Login</NavItem>
                        <NavItem to="/register">Register</NavItem>
                    </>
                )}
            </div>
        </Nav>
    );
};

export default NavBar;
