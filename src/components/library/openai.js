// // library/openai.js
// export const getChatResponse = async (question) => {
//     let retries = 0;
//     let delay = 1000; // Initial delay in milliseconds
  
//     while (true) { // Infinite retry loop
//       try {
//         const response = await fetch('https://api.openai.com/v1/chat/completions', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//           },
//           body: JSON.stringify({
//             model: 'gpt-3.5-turbo',
//             messages: [
//               { role: 'system', content: 'You are a helpful assistant.' },
//               { role: 'user', content: question },
//             ],
//             max_tokens: 150,
//             temperature: 0.7,
//           }),
//         });
  
//         if (!response.ok) {
//           if (response.status === 429) {
//             // Handle rate limiting
//             const retryAfter = response.headers.get('Retry-After');
//             delay = retryAfter ? parseInt(retryAfter) * 1000 : delay * 2; // Exponential backoff
//             retries++;
//             console.warn(`Rate limit exceeded. Retrying in ${delay / 1000} seconds...`);
//             await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
//             continue;
//           } else {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//         }
  
//         const data = await response.json();
//         return data.choices[0]?.message.content.trim() || 'Sorry, I didn\'t understand that.';
//       } catch (error) {
//         console.error('Error communicating with OpenAI:', error);
//         return 'There was an error. Please try again later.';
//       }
//     }
//   };
  