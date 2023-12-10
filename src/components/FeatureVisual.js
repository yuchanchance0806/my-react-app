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
      <img src="/images/your-image.jpg" alt="就活生の画像" className="your-custom-class"/>
      <img src="/images/your-pc-image.jpg" alt="就活生の画像（PC版）" className="your-pc-custom-class"/>
      {/* その他の要素 */}
    </div>
  );
}

export default FeatureVisual;
