import fetch from 'node-fetch';

export const aoaisendPromptToGpt = async (prompt: string, token:string) => {
    const apimUrl = process.env.APIM_URL;
    const deploymentName =process.env.DEPLOYMENT_ID;
    const apiVersion = process.env.API_VERSION;
    const subscriptionKey = process.env.SUBSCRIPTION_KEY;

    if (!subscriptionKey) {
        throw new Error('SUBSCRIPTION_KEY is not defined');
    }

    const url = `${apimUrl}/deployments/${deploymentName}/chat/completions?api-version=${apiVersion}`;
    console.log("log",token)
    const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': subscriptionKey
    };

    const jsonPayload = {
        model:"gpt-35-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        top_p: 0.95,
        max_tokens: 800
    };


    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(jsonPayload)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const completion = await response.json();
        const gptResponseMessage = completion.choices[0].message.content;
        return gptResponseMessage;
    } catch (error) {
        console.error('Error in fetching GPT response:', error);
        throw error;
    }
};