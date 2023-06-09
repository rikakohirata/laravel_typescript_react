import { 
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';  // Material UIをインポート
import { Item } from '@/types';
import { GenerallyButton } from '@/Components/GenerallyButton';


// 上記で定義した引数の型を指定
export const ItemTable = ({currentItems}: {currentItems: Item[]}) => {
  const buttonText = '新規登録';

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
          <GenerallyButton buttonText={'新規登録'} />
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
                      {currentItems.map((item: Item ) => (
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