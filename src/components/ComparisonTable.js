import React from 'react';
import './ComparisonTable.css';

function ComparisonTable() {
  return (
    <div className="comparison-table">
      <h2>転職サイト比較</h2>
      <table>
        <thead>
          <tr>
            <th>ロゴ</th>
            <th>サイト名</th>
            <th>特徴</th>
            <th>年収</th>
            <th>詳細</th>
          </tr>
        </thead>
        <tbody>
          {/* マイナビエージェント */}
          <tr>
            <td><img src="/path-to-logo/mynavi-logo.png" alt="マイナビエージェント" className="company-logo"/></td>
            <td>マイナビエージェント</td>
            <td>キャリアアップを目指す方向け</td>
            <td>300～800万</td>
            <td><a href="https://mynavi-agent.jp/..." className="details-button" target="_blank">求人を見る</a></td>
          </tr>
          {/* ビズリーチ */}
          <tr>
            <td><img src="/path-to-logo/bizreach-logo.png" alt="ビズリーチ" className="company-logo"/></td>
            <td>ビズリーチ</td>
            <td>高年収・ハイキャリア向け</td>
            <td>600～1200万</td>
            <td><a href="https://www.bizreach.jp/..." className="details-button" target="_blank">求人を見る</a></td>
          </tr>
          {/* リクルートエージェント */}
          <tr>
            <td><img src="/path-to-logo/recruit-logo.png" alt="リクルートエージェント" className="company-logo"/></td>
            <td>リクルートエージェント</td>
            <td>幅広い業種・職種の求人あり</td>
            <td>300～800万</td>
            <td><a href="https://www.r-agent.com/..." className="details-button" target="_blank">求人を見る</a></td>
          </tr>
          {/* doda */}
          <tr>
            <td><img src="/path-to-logo/doda-logo.png" alt="doda" className="company-logo"/></td>
            <td>doda</td>
            <td>大手・有名企業の求人が豊富</td>
            <td>300～1000万</td>
            <td><a href="https://doda.jp/..." className="details-button" target="_blank">求人を見る</a></td>
          </tr>

          {/* Green */}
          <tr>
            <td><img src="/path-to-logo/green-logo.png" alt="Green" className="company-logo"/></td>
            <td>Green</td>
            <td>IT・エンジニア向けの求人多数</td>
            <td>400～700万</td>
            <td><a href="https://www.green-japan.com/..." className="details-button" target="_blank">求人を見る</a></td>
          </tr>

          {/* doda X */}
          <tr>
            <td><img src="/path-to-logo/dodax-logo.png" alt="doda X" className="company-logo"/></td>
            <td>doda X</td>
            <td>ハイクラス・エグゼクティブ向け</td>
            <td>800～2000万</td>
            <td><a href="https://doda-x.jp/..." className="details-button" target="_blank">求人を見る</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
