import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Pagination } from './components/Pagination';


export default function Index(props: PageProps) {
    const { auth, items } = props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Item</h2>}
        >
            <Head title="Item" />
            
            {/* ページネーションコンポーネント */}
            <Pagination items={items} />
        </AuthenticatedLayout>
    );
}
