"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const withAuth = (WrappedComponent: NextPage) => {
    console.log("withAuth is called"); // 追加
    const AuthenticatedComponent: NextPage = (props) => {
        const router = useRouter();

        useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    // サーバーサイドレンダリングをサポート
    AuthenticatedComponent.getInitialProps = async (ctx) => {
        if (WrappedComponent.getInitialProps) {
        const componentProps = await WrappedComponent.getInitialProps(ctx);
        return { ...componentProps };
        }
        return {};
    };

    return AuthenticatedComponent;
};

export default withAuth;