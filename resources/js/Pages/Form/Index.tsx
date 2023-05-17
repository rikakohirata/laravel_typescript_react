import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material"; // Material UI

export default function Index({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Sample Form</h2>}
        >
            <Head title="Sample Form" />

            {/* フォーム要素の幅を調整 */}
            <Container maxWidth="xs"> 

                {/* sxプロパティでレイアウトやスタイルを指定
                    divタグが生成されフォーム全体を囲んでいる */}
                <Box 
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                > 
                  
                  {/* h1タグで囲まれた要素
                      テキストはh4で表示される */}
                  <Typography component="h1" variant="h4">
                    ログイン
                  </Typography>

                  {/* formタグで囲まれた入力フォーム
                      noValidate属性でブラウザのデフォルトのバリデーションが無効化され、
                      独自のバリデーションルールを実装することができる */}
                  <Box component="form" noValidate sx={{ mt:1 }}> 

                    {/* メールアドレスのテキストフィールド */}
                    <TextField
                      margin="normal"         // テキストフィールドの垂直方向の間隔を調整
                      required                // 入力必須、placeholderのテキストに*が付与される
                      fullWidth               // 横幅が親要素に対して最大になる
                      id="email"
                      label="メールアドレス"
                      name="email"
                      autoComplete="email"
                      autoFocus               // ページが読み込まれた際、自動的にこのテキストフィールドがフォーカスされる
                    />

                    {/* パスワードのテキストフィールド */}
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="パスワード"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"  // ボタンのデザインを指定（塗りつぶしのボタン）
                      sx={{ mt:3, mb:2 }}
                    >
                      ログイン
                    </Button>

                    {/* containerを指定し、各リンクを横並びにする */}
                    <Grid container>
                      {/* item xsで各リンクが両端に配置される */}
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          パスワードを忘れた
                        </Link>
                      </Grid>

                      <Grid item>
                        <Link href="#" variant="body2">
                          新規登録
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
            </Container>
        </AuthenticatedLayout>
    );
}
