import fs from 'fs'
import Post from './post'
async function ServerComp() {
    const jsonData = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonDataJson = await jsonData.json()
    return (
        <div>
            <Post data={jsonDataJson}/>
        </div>
    )
}

export default ServerComp