import "./User.css";
import { useState } from "react";
function User(props) {
    const tweets = props.tweets;
    const [keySearch, setKeySearch] = useState('');

    function onChangeKeySearch(event) {
        setKeySearch(event.target.value)
    }

    function onClickSearch() {
        fetch(`http://127.0.0.1:1337/${props.user.username}/search?text=${keySearch}`)
            .then(response => response.json())
            .then(data => {
                if (data.data)
                    props.setTweets(data.data);
                else
                    props.setTweets([])
                
            });
    }

    return (
        <div className="user-container">
            <div className="user-tweet-search-container">
                <input type="text" onChange={onChangeKeySearch} placeholder="Search tweets" />
                <button onClick={onClickSearch}>Search</button>
            </div>
            <div>
                {
                  tweets.length > 1 ?
                    tweets.map((tweet, index) => {
                        return (
                            <div>
                                <img src={props.user.profile_image_url} alt="pfp" />
                                <p>{props.user.name} - <b>@{props.user.username}</b></p>
                                <p key={index}>{tweet.text}</p>
                                <p><i>{tweet.created_at}</i></p>
                            </div>
                        )
                    })  :
                  <p>No tweets exist</p>
                }
            </div>
        </div>
    )
}

export default User;