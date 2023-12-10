import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* コンテンツ、リンク、情報など */}
        <div className="footer-section">
          <h4>メトロキャリアについて</h4>
          <ul>
            <li><a href="/about">会社情報</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
            {/* その他のリンク */}
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>リソース</h4>
          <ul>
            <li><a href="/blog">ブログ</a></li>
            <li><a href="/news">ニュース</a></li>
            {/* その他のリンク */}
          </ul>
        </div>

        {/* その他のセクションを追加可能 */}
      </div>

      <div className="footer-bottom">
        <p>© 2023 メトロキャリア. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
