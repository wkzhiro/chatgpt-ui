'use client';

import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import ChatMessage from './ChatMessage';
import AzureChatForm from './AzureChatForm';

const AzureChatClient = () => {
    return (
        <RecoilRoot >
        {/* <!-- メッセージエリア --> */}
        <div className="flex-grow overflow-auto p-6 space-y-5 ">
            <ChatMessage />
        </div>
    
        {/* <!-- テキスト入力フォーム --> */}
        <AzureChatForm />

        </RecoilRoot>
    )
};

export default AzureChatClient