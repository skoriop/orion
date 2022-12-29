import React, {useEffect, useState} from "react";

import {callAPI} from '../Dashboard/Dashboard';

function Profile() {
    const [data, setData] = useState({});
    useEffect(() => {
        callAPI("GET", "me").then(d => setData(d));
    }, []);
    console.log(data);
    if (data === {}) return(<div></div>);
    else return (
        <div>
            <h2>
                <a href={`${data.external_urls.spotify}`}>{data.display_name}</a>
            </h2>
            <h4>{data.followers.total} followers</h4>
        </div>
    );
}

export default Profile;