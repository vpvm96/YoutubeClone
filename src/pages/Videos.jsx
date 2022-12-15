import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { useYoutubeApi } from "../context/YoutubeApiContext"
import VideoCard from "../components/VideoCard"

const Videos = () => {
  const { keyword } = useParams()
  const { youtube } = useYoutubeApi()
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword))

  return (
    <>
      <div>Videos {keyword ? `${keyword}` : "🔥"}</div>
      {isLoading && <p>Lodaing...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  )
}

export default Videos
