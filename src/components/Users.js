import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';


export default class Users extends Component {

    InstaService = new InstaService();

    state = {
        posts: [],
        error: false,
    }



    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { name, altname, photo, src, alt, descr, id } = item;

            return (

                <div key={id} className="user">

                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min
                    />


                </div>
            )
        })
    }


    render() {

        const { error, posts } = this.state;
        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(posts);

        return (
            <div className="right">
                <User
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Official_calls_and_evening_reception_for_TRH_The_Duke_of_Sussex_%281%29_%28cropped%29.jpg/267px-Official_calls_and_evening_reception_for_TRH_The_Duke_of_Sussex_%281%29_%28cropped%29.jpg?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=480:*"
                    alt="prince"
                    name="Harry_the_prince"
                />
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }

}
