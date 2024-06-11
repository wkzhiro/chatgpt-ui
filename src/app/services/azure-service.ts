const { AzureKeyCredential, OpenAIClient } = require("@azure/openai");

export const azuresendPromptToGpt = async (prompt:string) => {

        const endpoint = process.env.AZURE_OPENAI_ENDPOINT!;
        const azureApiKey = process.env.AZURE_OPENAI_API_KEY!;
        const deploymentId = process.env.AZURE_OPENAI_DEPLOYMENT_ID!;

        const client = new OpenAIClient (
            endpoint,
            new AzureKeyCredential(azureApiKey)
        );
    
        const completion = await client.getChatCompletions(
            "gpt-4o",
            [{ "role": "user", "content": prompt }],
            // temperature: 1,
            // max_tokens: 256,
            // top_p: 1,
            // frequency_penalty: 0,
            // presence_penalty: 0, 
        );
    
        const gptResponseMessage = completion.choices[0].message.content;
        console.log(gptResponseMessage)
        return gptResponseMessage;
};