import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {InputGroup, Nav, Button} from 'react-bootstrap'
import axios from 'axios'
import Loader from '../components/Loader'

//component
import {
    RoomCardWrapper,
    CardBody,
    CardHeader,
    CardHeading
} from "../components/Card";
import SchedulerTest from "./SchedulerTest";

//css
import "./css/room.css"

function Room() {
    let [tab, setTab] = useState(0)
    const navigate = useNavigate()
    
    let [roomInfo, setRoomInfo] = useState(null)
    let [loader, setLoader] = useState(true)
    let [groupSchedule, setGroupSchedule] = useState(null)
    let start = true
    
    let {roomId} = useParams() 
    let {userId} = useParams()
    let srcUrl = process.env.REACT_APP_API_URL + 'room/' + roomId

    // 방 정보 가져오기
    useEffect (()=>{
        axios.get(srcUrl)
        .then((result) => { 
            // console.log(result.data);
            setLoader(false);
            setRoomInfo(result.data);
        })
    },[start]);

    // 전체 스케줄 가져오기
    useEffect (()=>{
        axios.get(srcUrl + '/schedule')
        .then((result) => { 
            console.log(result.data);
            setGroupSchedule(result.data);
        })
    },[start]);

    return(
        <div className="Room">
            
                {(
                    loader ? <Loader type="spin" color="black" message="스케줄 정보를 불러오는 중입니다" ></Loader> :
                        roomInfo != null
                            ?
                            (
                            <RoomCardWrapper>
                                <CardHeader>
                                    <CardHeading>{roomInfo.title}</CardHeading>
                                    <h6>{roomInfo.startDay}~{roomInfo.endDay}</h6>
                                    <h6>{userId}님의 스케줄러</h6>
                                </CardHeader>
                                <CardBody>
                                    <div class="schedular">
                                        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-0" onClick={() => { setTab(0) }}>내 스케줄</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-1" onClick={() => { setTab(1) }}>그룹 스케줄</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <TabContent
                                            tab={tab}
                                            roomInfo={roomInfo}
                                            groupSchedule={groupSchedule}
                                        ></TabContent>
                                    </div>

                                    <div class="vertical-center" style={{ marginBottom: '50px', marginTop: '50px' }}>
                                        <Button variant="outline-danger" style={{ marginRight: '10px', display: 'inline-block' }}
                                            onClick={() => { navigate(-1) }}>
                                            뒤로가기</Button>
                                        {/* <Button variant="outline-secondary" onClick={() => { alert('\n(카톡 챗봇 알림 예정)\n친구들과의 스케줄 비교 결과\n정해진 약속시간은 "2022-05-19 13:00~15:00"입니다\n확인버튼을 누르면 내 캘린더에 일정이 등록됩니다'); }}>제출하기</Button> */}
                                    </div>
                                </CardBody>
                            </RoomCardWrapper>

                            )
                            : null
                )
                }
        </div>
    )
}



function TabContent(props) {
    const navigate = useNavigate();

    console.log(props)
    if(props.tab == 0){
        return (
            <SchedulerTest
            roomInfo={props.roomInfo}
            isGroup={false}
            groupSchedule={props.groupSchedule}
            />
        )
    } else if(props.tab ==1) {
        return(
            <SchedulerTest
            roomInfo={props.roomInfo}
            isGroup={true}
            groupSchedule={props.groupSchedule}
            />
        )
    }
}

export default Room