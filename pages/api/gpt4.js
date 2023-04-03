// Import openai npm package
import openai from 'openai';


// Define your API key or token as an environment variable
openai.apiKey = process.env.OPENAI_API_KEY;

// Define your model name as an environment variable
const model = process.env.OPENAI_MODEL;

// Export a default function that handles requests to the API route
export default async function handler(req, res) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    // Get the input text from the request body
    const input = req.body.input;

    // Define query parameters for GPT-4 API
    const query = {
      prompt: input, // The text input for the model
      max_tokens: 2000, // The maximum number of tokens to generate
      temperature: 0.9, // The randomness of the generation
      frequency_penalty: 0.1, // The penalty for repeating words or phrases
      presence_penalty: 0.1, // The penalty for mentioning new entities
      stop: '\n' // The token to stop the generation
    };

    try {
      // Make a POST request to the OpenAI API with your query and API key
      const response = await openai.Completion.create(model, query);

      // Get the completion text from the response data
      const completion = response.choices[0].text;

      // Send the completion text as a JSON response
      res.status(200).json({ completion });
    } catch (error) {
      // Handle any errors from the OpenAI API
      console.error(error);

      // Send an error message as a JSON response
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    // Send a 405 Method Not Allowed error if the request method is not POST
    res.status(405).json({ error: 'Method not allowed' });
  }
}