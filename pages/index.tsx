import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
      <h1 className="text-4xl font-bold">Next Tweets</h1>
      <span className="">
        Next Tweets is a api service that provide api to fetch details of a
        tweet using tweet id
      </span>
      <span>
        
        It utilize react-tweets as underlying package to achive the task
      </span>
      <button className="flex gap-2 items-center">Fetch Tweet 
        <a href="/api/tweet/1802384142728106190" className=" p-2 border rounded-md">
        /api/tweet/[tweetId]
          
        </a>
      </button>
    </div>
  );
}
