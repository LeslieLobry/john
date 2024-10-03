import { useEffect, useState } from "react"


function Post (){
    const [isLoading, setIsloading] = useState(true)
    const [posts, setPosts] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:1337/post',
            {
                method:"GET",
                headers:{
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                setPosts(res)
                setIsloading(false)
            })
    })
    return(
            <div className="text"><h1>list post</h1>
            {isLoading ? 'Loading..' : posts.map(post => <h2>{post.title}</h2>)}
            </div>
    )
}
export default Post