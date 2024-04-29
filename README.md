## The What

NewsClips is an app that summarizes news articles. 

## The Why

With the new age technology, and ubiquitous assimilation of information, the attention span of people has been regressing. Moreover, there are sources, where the same point is made over and over to strategically keep the users on their website for a long time. This app summarizes the news articles into 3-4 sentences, saving time for the user to decide whether they want to read more about it in detail or skip it. 

In the words of William Shakespeare - "Brevity is the soul of Wit".

##  The How

This is a hybrid Next.js + Python app that uses Next.js as the frontend and Flask as the API backend. One great use case of this is that to write Next.js apps that use Python AI libraries on the backend. We integrated an open source python AI library called "Sumy", to summarize the news content. 

The Python/Flask server is mapped into to Next.js app under /api/.

This is implemented using next.config.js rewrites to map any request to /api/:path* to the Flask API, which is hosted in the /api folder.

On localhost, the rewrite will be made to the 127.0.0.1:5328 port, which is where the Flask server is running.

## Getting Started

Assuming you have Nodejs, npm and Python installed in your system:
First, run the following commands in the specified order :

```bash
npm install - #to install all the dependencies for UI
npm run setup - # to install all the dependencies for the server
npm run dev - #to concurrently run the server and the frontend
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The Flask server will be running on http://127.0.0.1:5328 – feel free to change the port in package.json (you'll also need to update it in next.config.js).

## Learn More

To learn more about Next.js and Flask and Python AI tool integration, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Nextjs Flask](https://vercel.com/templates/next.js/nextjs-flask-starter) - learn about nextjs, flask template
- [Sumy AI](https://github.com/miso-belica/sumy/blob/main/README.md) - Python AI Summarization tool

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
