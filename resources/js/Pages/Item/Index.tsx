import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
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

export default function Index({ auth, items }: PageProps<{ items: {
                                                                    map: any;   
                                                                    id: number; 
                                                                    item_name: string; 
                                                                    category: string; 
                                                                    price: number; 
                                                                    }}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Item</h2>}
        >
            <Head title="Item" />

            {/* 商品一覧を表示 */}
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
                <Box sx={{ marginTop: 8 }}>
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
                                {items.map((item: { id: number, item_name: string, category: string, price: number }) => (
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
        </AuthenticatedLayout>
    );
}
