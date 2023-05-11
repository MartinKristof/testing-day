import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center p-24 flex w-full justify-center ${inter.className}`}
    >
      <Head>
        <title>Testing day</title>
      </Head>
      <div className="mb-24">
       <h1 className={`mb-3 text-2xl font-semibold text-center`}>Testing day</h1>
       <div>
       <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/ab-test-hanoi.jpeg"
            alt="Ab test enable"
            width={400}
            height={400}
            priority
          />
          </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 place-items-center gap-12">
        <a
          href="https://www.pazaruvaj.com/?set-force-variant-olaf-abtest=hanoi"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Enable ab test
          </h2>

          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/ab-test-hanoi.jpeg"
            alt="Ab test enable"
            width={300}
            height={300}
            priority
          />
        </a>

        <a
          href="https://www.pazaruvaj.com/?set-force-variant-olaf-abtest=null"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Disable ab test
          </h2>

          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/ab-test-disable.jpeg"
            alt="Ab test disable"
            width={300}
            height={300}
            priority
          />
        </a>

        <a
          href="https://www.pazaruvaj.com/?set-force-variant-olaf-abtest=fallback"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Force legacy
          </h2>

          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/ab-test-fallback.jpeg"
            alt="Ab test disable"
            width={300}
            height={300}
            priority
          />
        </a>


      </div>
      <footer className="mt-10">
        <p>We love you. Your RTP team!</p>
      </footer>
    </main>
  )
}
