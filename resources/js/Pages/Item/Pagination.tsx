import { useState } from 'react';
import Item from "@/types/type";
import "../../../css/pagination.css";
import ItemList from './ItemList';
import ReactPaginate from 'react-paginate';

// 受け取る引数の型を指定
type Props = {
  items: Item[];
};

// 上記で定義した引数の型を指定
const Pagination = (props: Props) => {
  // 引数で受け取った情報を取り出す
  const {items} = props;

  // 1ページに表示する要素数
  const itemsPerPage = 3;
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
      <ItemList items={items} currentItems={currentItems} />
      {/* ページネーション */}
      <ReactPaginate 
        pageCount={pageCount}
        onPageChange={handlePageClick}
      />
    </>

  );
};

export default Pagination;