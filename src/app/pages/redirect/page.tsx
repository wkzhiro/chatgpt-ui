'use client';
import React, { useEffect, useState } from 'react';
import { AuthenticationResult } from "@azure/msal-node";
// const { AuthenticationResult} = require("@azure/openai");
import axios from "axios";
import { useSearchParams } from "next/navigation";
// import OaChatClient from '../../components/oaChatClient';
import ChatClient from '@/app/components/ChatClient';


export default function ChatPage() {
    const params = useSearchParams();
    const [state, setState] = useState({
        jwt: "",
    });
    const [code, _] = useState(params.get("code"));

    useEffect(() => {
        (async () => {
            // 認証をかける
            const url = "/api/auth/verify";
            const { data }: { data: AuthenticationResult } = await axios.post(url, {
                code
            });
            setState({ jwt: data.accessToken });
            console.log("jwt",data.accessToken)
        })();
    }, [code]);

    return (
        <div>
            {state.jwt ? (
                <div className="flex flex-col h-screen">
                    {/* <!-- チャットヘッダー --> */}
                    <div className="p-3 bg-gray-800 text-white">
                        <h1 className="text-lg">チャットルーム</h1>
                    </div>
                    <ChatClient token={state.jwt}/>
                </div>
            ) : (
                <div>認証が必要です</div>
            )}
        </div>
    );
}