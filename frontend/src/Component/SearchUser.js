import "./SearchUser.css";
import { useState } from "react";

function SearchUser(props) { 
    // props
    const [searchInput, setSearchInput] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    function onInputChange(event){ 
        setSearchInput(event.target.value)
    }

    function onClickTweetSearch(){
        fetch("http://127.0.0.1:1337/"+searchInput)
        .then(response => response.json())
        .then(data => { 
            console.log(data)
            if (data.data === undefined) {
                setError("User does not exist")
                return;
            }
            if(data.data.length>1){
                const tweets = data.data;
                const tweetUser = data.user.users[0];

                console.log(tweets, tweetUser)
                setUsers(previousState => [...previousState, searchInput])

                props.setTweets(tweets);
                props.setUser(tweetUser);
                setSearchInput("");
                setError("")
            }
        })
    }

    return (
        <div className="search-user-container">
            <div className="search-user-search">
                <img onClick={onClickTweetSearch} src="./search.svg" alt="search" />
                <input onChange={onInputChange} value={searchInput} type="text" placeholder="Enter User Name"/>
            </div>
            { error ? <p>{error}</p> : null}
            <div className="search-user-list">
                {
                    users.map((user, index) => 
                         <p key={index}>{user}</p>
                    )
                }
            </div>
        </div>
    )
}

export default SearchUser;