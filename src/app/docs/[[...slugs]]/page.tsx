import Safe from "@/app/_safe/page"
import { Metadata } from "next"

type Params = {
  params: { slugs?: string[] }
}

export const generateMetadata = ({ params }: Params): Metadata => {
  return {
    title: `title ${params?.slugs?.length}`
  }
}

export default async function page({ params }: Params) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.slugs ? params.slugs[0] : ''}`)
  const jsonData = await data.json()

  return (
    <>
      <div>page {params.slugs?.length}</div>
      {jsonData ? JSON.stringify(jsonData) : ''}
      <Safe />
    </>
  )
}