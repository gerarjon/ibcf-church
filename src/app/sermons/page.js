"use client"

import React, { useEffect, useState } from "react"

export default function Sermons() {
  const [videoList, setVideoList] = useState(null);

  useEffect(()=> {
    const getAllVideos = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const CHANNEL_ID = "UCtVUdili7_2g6h-tz_JTsQg";

      // Get uploads playlist
      const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
      const channelResponse = await fetch(channelUrl);
      const channelData = await channelResponse.json();
      const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

      const videoUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${uploadsPlaylistId}&maxResults=20&key=${API_KEY}`;
      const videoResponse = await fetch(videoUrl);
      const videoData = await videoResponse.json();
      setVideoList(videoData.items)
    }
    
    getAllVideos();
  }, []);

  const formatDate = (publishedAt) => {
    const date = new Date(publishedAt);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <main className="py-20">
      <section className="mx-auto container px-5 m-5">
          <h3 className="text-xl lg:text-3xl font-black text-subtitle">Sermons</h3>
          <h1 className="flex flex-col text-7xl lg:text-8xl font-black uppercase tracking-tighter text-title">Watch <span className="italic -my-6 lg:-my-7">Our</span> Sermons</h1>

          <div className="my-10 text-lg">
              <p>Below is an archive of our most <span className="underline">recent</span> sermons.</p> 
              <p>New sermons are posted each week. We also invite you to attend our Sunday services <a className="text-blue-400" target="_blank" href="https://www.facebook.com/ibcfellowship/videos/?ref=page_internal">online</a> or in person!</p>
              <p>Check out our <a className="text-blue-400" target="_blank" href="#">Youtube</a> channel for all our videos.</p>
          </div>

          <div className="my-10">
              {
                  videoList ? 
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
                      {videoList.map((video) => (
                        <div 
                          className="p-5 border rounded-t-lg bg-white shadow-md"
                          key={video.snippet.resourceId.videoId}
                        >
                          {/* Date */}
                          <p className="text-xs text-gray-500">{formatDate(video.snippet.publishedAt)}</p>

                          {/* Embedded Video */}
                          <div className="w-full h-48 bg-black">
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                              allowFullScreen
                              title={video.snippet.title}
                            ></iframe>
                          </div>

                          {/* Video Title */}
                          <div className="p-2">
                            <h3 className="font-medium">{video.snippet.title}</h3>
                          </div>
                        </div>
                      ))}
                  </div>
                  :
                  <p>Getting list of videos...</p>
              }
          </div>
      </section>
    </main>
  )
}