import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import {
    Box,
    Container,
  } from "@mui/material"; // Material UI

export default function Guest({ children }: PropsWithChildren) {
    return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Container maxWidth="xs"> 
                <Box sx={{mt: "64px"}}>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200"> 
                            {children}
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    );
}