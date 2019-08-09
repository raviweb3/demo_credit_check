import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import {readProfile } from '../../graphQL/operations';

const localStorage = require('local-storage');

class UserProfileData extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { userId } = this.props;
        return (
            <Query
                fetchPolicy={'cache-and-network'}
                query={readProfile}
                variables={
                    {
                        where:{
                            user:{
                                id: userId
                            }
                        }
                    }
                }
                onCompleted={data =>{
                    console.log(data);
                }}
                onError={error => console.log(error)}
            >{
                ({loading, error, data}) => {
                    if(loading){
                        return <div>Loading Profile.....</div>
                    }
                    let userProfile ={};

                    if(error){
                        console.log(error);
                        return this.props.render({
                            userProfile
                        })
                    }

                    const { readProfile } = data;

                    if(readProfile && readProfile.length) {
                        userProfile = readProfile[0];
                        userProfile.userId = userId;
                        // Clear the local storage and
                        // setup the new information
                        localStorage.set("user-profile", JSON.stringify(userProfile));
                    }

                    return this.props.render({
                        userProfile: userProfile
                    })
                }
            }
            </Query>
        )
    }
}

export default UserProfileData;
