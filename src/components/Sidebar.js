import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="search-form">
        <div className="select">
          {/* 勤務地の選択 */}
<dl>
  <dd>
    <div className="select-wrap">
      <select name="area" id="area" required>
        <option disabled selected value="">勤務地</option>
        <option value="北海道">北海道</option>
        <option value="青森県">青森県</option>
        <option value="岩手県">岩手県</option>
        <option value="宮城県">宮城県</option>
        <option value="秋田県">秋田県</option>
        <option value="山形県">山形県</option>
        <option value="福島県">福島県</option>
        <option value="茨城県">茨城県</option>
        <option value="栃木県">栃木県</option>
        <option value="群馬県">群馬県</option>
        <option value="埼玉県">埼玉県</option>
        <option value="千葉県">千葉県</option>
        <option value="東京都">東京都</option>
        <option value="神奈川県">神奈川県</option>
        <option value="新潟県">新潟県</option>
        <option value="富山県">富山県</option>
        <option value="石川県">石川県</option>
        <option value="福井県">福井県</option>
        <option value="山梨県">山梨県</option>
        <option value="長野県">長野県</option>
        <option value="岐阜県">岐阜県</option>
        <option value="静岡県">静岡県</option>
        <option value="愛知県">愛知県</option>
        <option value="三重県">三重県</option>
        <option value="滋賀県">滋賀県</option>
        <option value="京都府">京都府</option>
        <option value="大阪府">大阪府</option>
        <option value="兵庫県">兵庫県</option>
        <option value="奈良県">奈良県</option>
        <option value="和歌山県">和歌山県</option>
        <option value="鳥取県">鳥取県</option>
        <option value="島根県">島根県</option>
        <option value="岡山県">岡山県</option>
        <option value="広島県">広島県</option>
        <option value="山口県">山口県</option>
        <option value="徳島県">徳島県</option>
        <option value="香川県">香川県</option>
        <option value="愛媛県">愛媛県</option>
        <option value="高知県">高知県</option>
        <option value="福岡県">福岡県</option>
        <option value="佐賀県">佐賀県</option>
        <option value="長崎県">長崎県</option>
        <option value="熊本県">熊本県</option>
        <option value="大分県">大分県</option>
        <option value="宮崎県">宮崎県</option>
        <option value="鹿児島県">鹿児島県</option>
        <option value="沖縄県">沖縄県</option>
      </select>
    </div>
  </dd>
</dl>


          {/* 職種の選択 */}
          <dl>
            <dd>
              <div className="select-wrap">
                <select name="job" id="job" required>
                  <option disabled selected value="">職種</option>
                  <option value="営業">営業</option>
                  <option value="販売･サービス">販売･サービス</option>
                  {/* 以下、他の職種を追加 */}
                  {/* ... */}
                </select>
              </div>
            </dd>
          </dl>

         {/* 年齢の選択 */}
<dl>
  <dd>
    <div className="select-wrap">
      <select name="age" id="age" required>
        <option disabled selected value="">年齢</option>
        {/* 20歳から80歳まで1歳刻みで追加 */}
        {[...Array(61)].map((_, i) => (
          <option value={`${i + 20}歳`}>{i + 20}歳</option>
        ))}
      </select>
    </div>
  </dd>
</dl>


          {/* サポートの選択 */}
<dl>
  <dt className="dt2">サポート<br /><span>※複数選択可</span></dt>
  <dd>
    <input type="checkbox" name="checks[]" value="キャリア相談" id="check5" />
    <label htmlFor="check5" className="check_btn">キャリア相談</label>

    <input type="checkbox" name="checks[]" value="面接対策" id="check6" />
    <label htmlFor="check6" className="check_btn">面接対策</label>

    <input type="checkbox" name="checks[]" value="条件交渉OK" id="check7" />
    <label htmlFor="check7" className="check_btn">条件交渉OK</label>
  </dd>
</dl>
        </div>

        {/* こだわりのチェックボックス */}
        <div className="input">
          {/* こだわりの選択 */}
<dl>
  <dt className="dt1">こだわり<br /><span>※複数選択可</span></dt>
  <dd>
    <input type="checkbox" name="checks[]" value="未経験OK" id="check1" />
    <label htmlFor="check1" className="check_btn">未経験OK</label>

    <input type="checkbox" name="checks[]" value="ハイキャリア" id="check2" />
    <label htmlFor="check2" className="check_btn">ハイキャリア</label>

    <input type="checkbox" name="checks[]" value="大手・有名企業" id="check3" />
    <label htmlFor="check3" className="check_btn">大手・有名企業</label>

    <input type="checkbox" name="checks[]" value="専門職" id="check4" />
    <label htmlFor="check4" className="check_btn">専門職</label>
  </dd>
</dl>
        </div>

        {/* 検索ボタン */}
<div className="button">
  <button id="btn-submit" className="search-button">この条件で検索</button>
</div>

      </div>
    </aside>
  );
}

export default Sidebar;
