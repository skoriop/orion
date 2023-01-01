import React, {useEffect, useState} from "react";

import {callAPI} from '../../helper.js';

function Profile() {
    const [data, setData] = useState({});
    useEffect(() => {
        callAPI("GET", "me").then(d => setData(d));
    }, []);
    // console.log(JSON.stringify(data));
    if (JSON.stringify(data).length === 2) return (<div></div>);
    else return (
        <div>
            <h2>
                <a href={data.external_urls.spotify}>{data.display_name}</a>
            </h2>
            <h4>{data.followers.total} followers</h4>
            <p>Country: {data.country}</p>
            <p>Email: {data.email}</p>
            <p>Membership: {data.product}</p>
        </div>
    );
}

export default Profile;