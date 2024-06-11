import { NextResponse } from 'next/server';
import { azuresendPromptToGpt } from "@/app/services/azure-service";

export async function POST(request: Request) {

    const { prompt } = await request.json();
    
    const gptResponseMessage = await azuresendPromptToGpt(prompt);
    const response = NextResponse.json({ gptResponseMessage })
    console.log("azure")
    return response;
}