import React from 'react';
import OaChatClient from '../../components/oaChatClient';
import withAuth from '@/app/lib/withAuth';

function ChatPage() {

    return (
        <div className="flex flex-col h-screen">
        {/* <!-- チャットヘッダー --> */}
        <div className="p-3 bg-gray-800 text-white">
            <h1 className="text-lg">チャットルーム</h1>
        </div>
        
        <OaChatClient />
        
        </div>
    )
};

export default withAuth(ChatPage)