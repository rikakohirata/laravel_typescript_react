import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
// import PrimaryButton from '@/Components/PrimaryButton';
import { GenerallyButton } from '@/Components/GenerallyButton';

// Material UIをインポート
// asキーワードを使用し、他のLinkコンポーネントとの衝突を防ぐ
import { Link as MuiLink } from '@mui/material'; 

// 型エイリアスでBlog型を定義
type Blog = {
    id: number;
    title: string;
    content: string; 
};

export default function Index({ auth, blogs }: PageProps<{ blogs: Blog[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Blog</h2>}
        >
            <Head title="Blog" />

            {/* 一覧表示 */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200"> 
                            <div>
                                {/* 新規作成ボタン */}
                                {/* <Link href={route("blog.create")}>
                                    <PrimaryButton type="button">新規作成</PrimaryButton>
                                </Link> */}

                                {/* Material UIを使用し、新規作成ボタンを実装 */}
                                <MuiLink href={route("blog.create")}>
                                    <GenerallyButton buttonText={'新規登録'} />
                                </MuiLink>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>タイトル</th>
                                        <th>コンテンツ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { blogs.map((blog: Blog) => {
                                        return (
                                            <tr key={blog.id}>
                                                <td className="border px-4 py-2">
                                                    {blog.title}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {blog.content}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
