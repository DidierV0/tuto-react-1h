import { useState } from "react";
import { Tweet } from "./tweet";
import { Tweetform } from "./TweetForm";
import { TweetList } from "./TweetList";

const DEFAULT_TWEET = [
    {
      id:0,
      name:"Didier", 
      content:"je gère", 
      like:150,
    },
    {
      id:1,
      name:"Betsy", 
      content:"c'est facile", 
      like:130,
    },
    {
      id:2,
      name:"Yannick", 
      content:"j'aime les chaussures", 
      like:160,
    },
    {
      id:3,
      name:"Ally", 
      content:"force taureau", 
      like:120,
    },
    {
      id:4,
      name:"Ludmi", 
      content:"que la lumière soit", 
      like:110,
    },

  ]

const useTweets = () => {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const addTweet = (tweet) => {
    setTweets((curr) => {
      const newTweet = {
      id: curr[curr.length -1]?.id +1 ?? 0,
      name: tweet.name,
      content: tweet.content,
      like : 0,
    };

    return [...tweets, newTweet]
    })
  }

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId) )
  }

  const onLike = (tweetId) => {
    setTweets(curr => {
      const copyTweet = [... curr]

      const likedTweet = copyTweet.find(tweet => tweet.id === tweetId)
      likedTweet.like += 1

      return copyTweet
    })
  }
  return {onLike, onDelete, addTweet, tweets}
}

function App() {
  
  const {onLike, onDelete, addTweet, tweets} = useTweets()

  return (
      <div>
        <Tweetform onSubmit={addTweet}/>
        <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
    </div>
  );
}

export default App;