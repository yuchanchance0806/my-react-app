import React from 'react';
import './ListItem.css';

function ListItem() {
  return (
    <div className="list-item">
      <h3>サイトA</h3>
      <p>サイトAは高収入の求人が豊富で、20代から40代の幅広い年代の転職者に人気です。</p>
      <a href="https://example.com/siteA">もっと見る</a>
      {/* その他のリストアイテム */}
    </div>
  );
}

export default ListItem;
