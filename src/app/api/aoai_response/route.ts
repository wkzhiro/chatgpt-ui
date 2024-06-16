import { NextResponse } from 'next/server';
import { aoaisendPromptToGpt } from "@/app/services/aoai-service";

export async function POST(request: Request) {

    const { prompt, token } = await request.json();  // token を含む
    console.log("request",request,"token",token)

    try {
        const gptResponseMessage = await aoaisendPromptToGpt(prompt, token);
        const response = NextResponse.json({ gptResponseMessage });
        console.log("aoai");
        return response;
    } catch (error) {
        console.error("Error in handling POST request:", error);
        return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
    }
}