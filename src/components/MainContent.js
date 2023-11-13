import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <h2>転職サイト比較</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>サイト名</th>
              <th>特徴</th>
              <th>詳細</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>サイトA</td>
              <td>高収入の求人が豊富</td>
              <td><a href="#">詳細を見る</a></td>
            </tr>
            <tr>
              <td>サイトB</td>
              <td>初心者向けのサポート</td>
              <td><a href="#">詳細を見る</a></td>
            </tr>
            {/* その他の行 */}
          </tbody>
        </table>
      </div>
      <div className="list-items">
        <div className="list-item">
          <h3>サイトA</h3>
          <p>サイトAの詳細説明...</p>
          <a href="#">もっと見る</a>
        </div>
        <div className="list-item">
          <h3>サイトB</h3>
          <p>サイトBの詳細説明...</p>
          <a href="#">もっと見る</a>
        </div>
        {/* その他のアイテム */}
      </div>
    </main>
  );
}

export default MainContent;
