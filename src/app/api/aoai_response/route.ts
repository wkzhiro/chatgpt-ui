import { NextResponse } from 'next/server';
import { aoaisendPromptToGpt } from "@/app/services/aoai-service";

export async function POST(request: Request) {

    const { prompt } = await request.json();
    
    const gptResponseMessage = await aoaisendPromptToGpt(prompt);
    const response = NextResponse.json({ gptResponseMessage })
    console.log("aoai")
    return response;
}