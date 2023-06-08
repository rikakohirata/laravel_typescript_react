import Item from "@/types/type";
import "../../../css/pagination.css";
import ItemList from './ItemList';

// 受け取る引数の型を指定
type Props = {
  items: Item[];
};

// 上記で定義した引数の型を指定
const Pagination = (props: Props) => {
  // itemsを取り出す
  const {items} = props;

  return (
    // 商品一覧コンポーネント
    <ItemList items={items}/>
  );
};

export default Pagination;