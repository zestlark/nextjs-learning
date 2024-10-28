'use client'
import React from 'react'

type IData={
    id:number,
    name:string
}

function Post({data}:{data:IData[]}) {
  return (
    <div>
        Post
        {data?.map((e)=><h1 key={e.id}>{e.id}</h1>)}
    </div>
  )
}

export default Post