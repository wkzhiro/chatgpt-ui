import fetch from 'node-fetch';

export const aoaisendPromptToGpt = async (prompt: string) => {
    
    const apimUrl = process.env.APIM_URL
    const deploymentName =process.env.MODEL;
    const apiVersion = process.env.API_VERSION;
    const subscriptionKey = process.env.SUBSCRIPTION_KEY;

    if (!subscriptionKey) {
        throw new Error('OPENAI_API_KEY is not defined');
    }

    const url = `${apimUrl}/deployments/${deploymentName}/chat/completions?api-version=${apiVersion}`;
    const headers = {
        "Content-Type": "application/json",
        "api-key": subscriptionKey
    };

    const jsonPayload = {
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        top_p: 0.95,
        max_tokens: 800
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(jsonPayload)
    });

    const completion = await response.json();
    const gptResponseMessage = completion.choices[0].message.content;
    return gptResponseMessage;
};
