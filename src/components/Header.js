import React from 'react';
import './Header.css'; // あなたのCSSファイルへのパス

function Header() {
  return (
    <header className="header">
      <img src="/images/metrocareer-logo.png" alt="MetroCareer Logo" />
      {/* その他のヘッダー要素 */}
    </header>
  );
}

export default Header;
