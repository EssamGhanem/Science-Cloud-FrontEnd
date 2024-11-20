"use client";


import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useState, useEffect } from 'react';


export default function VideoPlayer(params: { url: string }) {
  const url = params.url;

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])



  return (
    <div className='w-full h-full'>{

      isClient ? <ReactPlayer url={url} width='100%' height='100%' controls /> : ""
    }</div>
  )
}
