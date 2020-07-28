import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import AUTH from "../../utils/AUTH"

const FriendsList = () => {

    const [friends, setFriends] = useState();

    useEffect(() => {
        AUTH.getUser()
            .then(
                res => {
                    API.getUserInfo(res.data.user.userName).then(
                        res => {
                            if (res.data[0].friends.length === 0) {
                                console.log("no friends")
                            }
                            else if (res.data[0].friends.length > 0) {
                                setFriends(res.data[0].friends);
                            }


                        }
                    )

                }

            )

    }, []);


    const displayFriends = () => {

        if (friends) {
            return friends.map(friend => <li>{friend}</li>)

        }
        else {
            return <div>You haven't added any friends yet :(</div>
        }

    }

    return (<>
        {displayFriends()}
    </>)
};

export default FriendsList;