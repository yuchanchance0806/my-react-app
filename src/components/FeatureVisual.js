import React from 'react';
import './FeatureVisual.css'; // CSSファイルのインポート

function FeatureVisual() {
  return (
    <div className="feature-visual">
      <p>人気！最新年度版</p>
      <h1 className="main-title">
        <span className="title-line">転職エージェント</span> {/* spanタグで囲む */}
        <span className="title-line">おすすめランキング</span>
      </h1>
      <img src="/path-to-smartphone-image.jpg" alt="就活生（スマートフォン用）" className="student-image smartphone-image" />
      <img src="/path-to-desktop-image.jpg" alt="就活生（パソコン用）" className="student-image desktop-image" />
      {/* その他の要素 */}
    </div>
  );
}

export default FeatureVisual;
