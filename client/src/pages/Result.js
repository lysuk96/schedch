import React,{useState} from "react";
import { useParams } from "react-router-dom";

//component
import {
    RoomCardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardLink,
    Img,
    H6,
    TextFieldset
} from "./components/Card";

//css

//data
import ScheduleDummy from "../api/dummy/ScheduleDummy";


import {Button} from 'react-bootstrap'


function Result() {
    
    const [schedule, setSchedule] = useState()

    let localData


    return(
        <div className="Home">
            <ResultCardWrapper>
                <CardBody>
                    {/* <ScheduleComponent
                    eventSettings={schedule}>
                        <Inject services={[Week,DragAndDrop,Resize]}/>
                    </ScheduleComponent> */}
                    <div class="vertical-center" style={{marginBottom:'50px', marginTop:'50px'}}>
                        <Button variant="outline-danger" style={{ marginRight: '10px', display:'inline-block'}}
                        onClick={()=>{setSchedule(ScheduleDummy)}}>
                        내 구글 캘린더 불러오기</Button>
                        <Button variant="outline-secondary" onClick={() => { alert('\n(카톡 챗봇 알림 예정)\n친구들과의 스케줄 비교 결과\n정해진 약속시간은 "2022-05-19 13:00~15:00"입니다\n확인버튼을 누르면 내 캘린더에 일정이 등록됩니다'); }}>제출하기</Button>
                    </div>
                </CardBody>
            </ResultCardWrapper>
        </div>
    )
}

export default Result