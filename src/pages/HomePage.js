import React from 'react';
import Navigation from '../components/common/Navigation/Navigation'
import Content from '../components/common/FirstPage/Content'
const HomePage = () => {
  return (
    <div>
        <Navigation/>
      {/* Nội dung của trang chủ */}
        <Content/>
    </div>
  );
};

export default HomePage;