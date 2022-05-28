import React,{useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {InputGroup, Nav, Button} from 'react-bootstrap'

//component
import {
    RoomCardWrapper,
    CardBody,
} from "../components/Card";
import SchedulerTest from "./SchedulerTest";

//css
import "./css/room.css"

function Room() {
    let [tab, setTab] = useState(0)
    const navigate = useNavigate()

    return(
        <div className="Room">
            <RoomCardWrapper>
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
                        <TabContent tab={tab}></TabContent>
                    </div>

                    <div class="vertical-center" style={{marginBottom:'50px', marginTop:'50px'}}>
                        <Button variant="outline-danger" style={{ marginRight: '10px', display:'inline-block'}}
                        onClick={()=>{navigate(-1)}}>
                        뒤로가기</Button>
                        <Button variant="outline-secondary" onClick={() => { alert('\n(카톡 챗봇 알림 예정)\n친구들과의 스케줄 비교 결과\n정해진 약속시간은 "2022-05-19 13:00~15:00"입니다\n확인버튼을 누르면 내 캘린더에 일정이 등록됩니다'); }}>제출하기</Button>
                    </div>
                </CardBody>
            </RoomCardWrapper>
        </div>
    )
}


function TabContent(props) {
    const navigate = useNavigate();

    if(props.tab == 0){
        return (
            <SchedulerTest></SchedulerTest>
        )
    } else if(props.tab ==1) {
        return(
            <SchedulerTest/>
        )
    }
}

export default Room