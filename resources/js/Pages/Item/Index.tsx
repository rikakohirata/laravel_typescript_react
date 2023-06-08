import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { PageProps } from '@/types';
import Item from '@/types/type';
import Pagination from './Pagination';



export default function Index({ auth, items }: PageProps< {items: Item[]} >) {

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
