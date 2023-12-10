import React from 'react';
import './MainContent.css';
import ComparisonTable from './ComparisonTable';
import ListItem from './ListItem';
import FeatureVisual from './FeatureVisual'; // パスは適宜調整してください

function MainContent() {
  return (
    <main className="main-content">
      <FeatureVisual />  {/* FVを先頭に追加 */}
      <ComparisonTable />
      <div className="list-items">
        <ListItem title="マイナビエージェント" description="キャリアアップを目指す方向けの豊富な求人" />
        <ListItem title="ビズリーチ" description="高年収・ハイキャリア向けのエクスクルーシブな求人" />
        <ListItem title="リクルートエージェント" description="幅広い業種・職種の求人が見つかる" />
        {/* 他のリストアイテム */}
      </div>
      <div className="article-content">
        <h2>転職ガイド</h2>
        <p>転職を成功させるためのヒントやコツをご紹介します。</p>
        {/* ここに記事コンテンツを追加 */}
      </div>
    </main>
  );
}

export default MainContent;
