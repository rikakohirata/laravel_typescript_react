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

            <Container maxWidth="xs">
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h4">
                    ログイン
                  </Typography>

                  <Box component="form" noValidate sx={{ mt:1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="メールアドレス"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />

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
                      variant="contained"
                      sx={{ mt:3, mb:2 }}
                    >
                      ログイン
                    </Button>

                    <Grid container>
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
