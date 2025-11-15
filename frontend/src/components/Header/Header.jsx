import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Order your favourite food here and enjoy delicious meals delivered right
          to your doorstep. Choose from a wide variety of cuisines, freshly prepared
          to satisfy every craving. Fast delivery, great taste — happiness is just
          a click away!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
