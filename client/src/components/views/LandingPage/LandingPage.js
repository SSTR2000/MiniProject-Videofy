import React, { useEffect, useState } from 'react'
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { Title } = Typography;
const { Meta } = Card;

function LandingPage() {

    // Store the video data taken from MongoDB in the state
    const [Videos, setVideos] = useState([])

    // Read data from MongoDB - useEffect() is same as componentDidMount, componentDidUpdate
    useEffect(() => {
        
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setVideos(response.data.videos)
                } else {
                    alert('ERROR: Video import failed.')
                }
            })

    }, [])

    const renderCards = Videos.map((video, index) => {
        
        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return <Col lg={6} md={8} xs={24}> 
            <div style={{ position: 'relative'}}>
            <a href={`/video/${video._id}`} >
                <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
                    <div className=" duration">
                        <span> {minutes} : {seconds} </span>
                    </div>
                </a>
            </div>
        
        <br/>

        <Meta
            avatar={
                <Avatar src={video.writer.image} />
            }
            title={video.title}
        />
        <span>{video.writer.name} </span><br />
    
        <span>Uploaded On:- {moment(video.createdAt).format("MMM Do YY")} </span>
    </Col>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2}> Recommended For You </Title>
            <hr/>
            <Row gutter={[32, 16]}>

                {renderCards}

            </Row>
        </div>
    )
}

export default LandingPage
