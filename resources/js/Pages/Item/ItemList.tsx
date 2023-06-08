import Item from '@/types/type';
import { 
  Container,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';  // Material UIをインポート

// 受け取る引数の型を指定
type Props = {
  items: Item[];
};

// 上記で定義した引数の型を指定
const ItemList = (props: Props) => {
  // items取り出す
  const {items} = props;

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
              mt: '64px',  // margin-top
              pb: '16px',  // padding-bottom
              borderBottom: 1,
              borderColor: 'grey.500',
              display: "flex",
              justifyContent: 'space-between',
      }}>
          <Typography component="h1" variant="h4">商品一覧</Typography> 
          <Button variant="contained" sx={{ backgroundColor: '#4B8F8F'}}>新規登録</Button> 
      </Box>
      <Box sx={{ mt: '64px' }}>
          <TableContainer component={Paper}>
              <Table sx={{ 
                          minWidth: 650,
                          p: 10  // padding
                          }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>No</TableCell>
                          <TableCell align="left">商品名</TableCell>
                          <TableCell align="left">カテゴリー</TableCell>
                          <TableCell align="left">金額</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {items.map((item: Item ) => (
                          <TableRow
                              key={item.item_name}
                              sx={{ 
                                  '&:last-child td, &:last-child th': { border: 0 } 
                          }}>
                              <TableCell component="th" scope="row">{item.id}</TableCell>
                              <TableCell align="left">{item.item_name}</TableCell>
                              <TableCell align="left">{item.category}</TableCell>
                              <TableCell align="left">{item.price}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
      </Box>
    </Container>
  );
};

export default ItemList;