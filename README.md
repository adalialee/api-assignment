Documentation:

Steps I Took:
1. To integrate the API from huggingface, I researched API usage and went through several trial-and-error phases. Before this assignment, I had never worked with APIs before, but I was determined to learn how to use APIs in React because I know I'll be doing that for my final project. I read through several sites that explained how software interacts with APIs and what the typical process for that looks like. Another source I looked through was the professor's starter code, but it was written in Python while I wanted to implement it using React. 

2. After analyzing/comparing the explanations/content from all of these sources, I went with the general response, result/await response, useState, useEffect, and return result code structure. 

3. For the detailed parameters from huggingface, I started with the text generation format, then realized that it auto-completes a prompt/question. After looking through more detailed parameters, I went with the correct question answering task format and logged the results to my console to double-check that everything was working properly.

As for the actual output of my program, it generates a creative "Hello World" text because it gives the message "helloooo world," which has extra letters for emphasis and lowercase letters. I gave the AI a couple examples of creative Hello World messages, which it used to modify and generative its own AI.

Instructions:
1. Clone my repository.
2. Open my repository in your desired code editor.
3. Replace the API key with yours in App.js.
4. Run my code in your desired web browser using the npm start terminal command.
5. View the generative API's output on my site.

Reflection:
Through this experience, I learned a lot about generative AI. The main challenge I faced was OpenAI's restrictive access. From all the resources I looked at, they didn't mention that users probably have to pay to use their generative AI programs. I tried so many variations of my code only to keep getting server processing errors. After reading the console, Googling the errors, and even attending my Web Development professor's Office Hours, I found out that I most likely needed to pay to use their services. That's when I moved to the huggingface AI tool and got to read more detailed explanations and suggestions for detailed parameters code formats. It has so many capabilities with text and image generation - I'm definitely excited to explore and implement them in my final project. Our group will use generative AI to synthesize and analyze information about recipes and time to produce suggestions about recipes that optimize users' time and ingredients.