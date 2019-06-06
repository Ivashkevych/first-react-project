import React from 'react';
import User from './User';
import Palette from './Palette';



const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Official_calls_and_evening_reception_for_TRH_The_Duke_of_Sussex_%281%29_%28cropped%29.jpg/267px-Official_calls_and_evening_reception_for_TRH_The_Duke_of_Sussex_%281%29_%28cropped%29.jpg?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=480:*"
                alt="Man"
                name="some_cool_man"
            />
            <Palette/>
        </div>
    )
}

export default Profile;