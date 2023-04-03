import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ChatGPT from '/Users/TSm201/Documents/practice-react-projects/chatgpt2.0-test1/pages/components/Prompt.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(process.env.OPENAI_API_KEY);
  return (
    <>
      <Head>
        <title>NeuChat</title>
        <meta name="description" content="advanced chatGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/#" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>NeuChat</h1>
        <div className={styles.description}>
          <p>
            this is a chatbot that uses GPT-3 to generate responses with advanced features like a filter button to create advanced prompts to generate better responses.
          </p>
          </div>
          <h1 className={styles.title}>
            Whats New!
          </h1>
          <div className={styles.description}>
          <p>
            the prompt field is now a text area so you can write longer prompts.
          </p>
          </div>
          <ChatGPT />
      </main>
    </>
  )
}
