Botd (by FingerprintJS) is a powerful browser library for bot detection. This demo showcases its usage alongside botd-integrations to perform bot detection at the edge.

Setup:

1. Clone the project and run

npm  install

2. Start the development server

npm run dev


If you attempt to access the /blocked route, you'll be redirected to the /bot-detected page. This redirection is handled at the edge, identifying and rerouting bot traffic by altering the user agent before making a request to Botd.


Obtain a free beta access token for Botd. Follow the instructions in the Botd GitHub repo to get your token.


Enjoy effortless bot detection with Botd in your Next.js application!


Credits: <a href='https://github.com/vercel/examples/blob/main/edge-middleware/bot-protection-botd'>view here</a>
# bot-detection-nextjs-botd
