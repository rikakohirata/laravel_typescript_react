import { useState } from 'react';
import "../../../../../css/pagination.css";
import { ItemTable } from './ItemTable';
import ReactPaginate from 'react-paginate';
import { Item } from '@/types';


// 上記で定義した引数の型を指定
export const Pagination = ({items}: {items: Item[]}) => {
  console.dir(items);
  // 引数で受け取った情報を取り出す
  // const {items} = props;
  // 1ページに表示する要素数
  const itemCount = 10;

  // 1ページに表示する要素数
  const itemsPerPage = itemCount;
  // 配列の最初の要素の添字を状態管理する
  const [itemsOffset, setItemsOffset] = useState(0);
  // 次の配列の最初の要素の添字
  const endOffset = itemsOffset + itemsPerPage;
  console.log(`Loading items from ${itemsOffset} to ${endOffset}`);
  // 配列を指定下要素数でスライスする
  const currentItems = items.slice(itemsOffset, endOffset); 
  // 総ページ数
  const pageCount = Math.ceil(items.length / itemsPerPage);
  console.log(`総ページ数 ${pageCount}`)
  
  // ページリンクがクリックときの処理
  const handlePageClick = (e: { selected: number }) => {
    // selectedはクリック下ページリンク-1の数
    console.log(`クリックされたページ ${e.selected + 1}`);
    // 2ページ目がクリックされた場合、1 * 3 % 10
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setItemsOffset(newOffset);
  }

  return (  
    <>
      {/* 商品一覧コンポーネント */}
      <ItemTable currentItems={currentItems} />
      <ReactPaginate 
        // 設定
        pageCount={pageCount}             // 総ページ数
        onPageChange={handlePageClick}    // ページリンクがクリックときの処理
        marginPagesDisplayed={2}          // 先頭と末尾に表示するページ数
        pageRangeDisplayed={5}            // 現在のページの前後に表示するページの範囲

        // クラス名
        containerClassName="pagination"   // ページネーションのulタグのクラス名
        pageClassName="page-item"         // 各ページ要素のliタグのクラス名
        pageLinkClassName="page-link"     // 各ページ要素のaタグのクラス名
        previousClassName="page-item"     // 戻るのliタグのクラス名
        previousLinkClassName="page-link" // 戻るのaタグのクラス名
        nextClassName="page-item"         // 次へのliタグのクラス名
        nextLinkClassName="page-link"     // 次へのaタグのクラス名
        breakClassName="page-item"        // 省略標記のliタグのクラス名
        breakLinkClassName="page-link"    // 省略標記のaタグのクラス名
        activeClassName="active-item"          // 現在のページのliタグのクラス名
        activeLinkClassName="active-link"      // 現在のページのaタグのクラス名

        // ラベル
        previousLabel='<'                // 戻るのラベル
        nextLabel='>'                    // 次へのラベル
        breakLabel="..."                 // 中間ページの省略記号
      />
    </>

  );
};
