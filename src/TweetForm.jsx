export function Tweetform({onSubmit}) {

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const name = event.target.name.value
        const content = event.target.content.value
    
        const newTweet = {
            name,
            content,
            like : 0
        }
    
        onSubmit(newTweet)
    }

        return (
            <form onSubmit={handleSubmit} className="tweetForm">
            <h4>new tweet</h4>
            <input placeholder="name" type="text" name="name"/>
            <input placeholder="content" type="content" name="content" />
            <input type="submit" />
        </form>
        )
}