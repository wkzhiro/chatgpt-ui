'use client';

import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import ChatMessage from './ChatMessage';
import AoaiChatForm from './aoaiChatForm';
// import ChatForm from './ChatForm';

// 型定義を追加
interface ChatClientProps {
    token: string;
}

const ChatClient: React.FC<ChatClientProps>  = ({ token }) => {
    console.log("client_token",token)
    return (
        <RecoilRoot >
        {/* <!-- メッセージエリア --> */}
        <div className="flex-grow overflow-auto p-6 space-y-5 ">
            <ChatMessage />
        </div>
    
        {/* <!-- テキスト入力フォーム --> */}
        <AoaiChatForm token={token} />

        </RecoilRoot>
    )
};

export default ChatClient