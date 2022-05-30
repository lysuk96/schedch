import React, { useState } from "react";
import { useNavigate, Route, Routes } from 'react-router-dom';
import Select from 'react-select';
import moment from 'moment'
import axios from 'axios'

//component
import {
    HomeCardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardButton,
    CardLink,
    CardInput
} from "../components/Card";
import { DatePicker } from "antd";

//css
import "./css/home.css";

//dummy
import PastDummy from "../api/dummy/PastDummy";

//TimePicker (나중에 공부해서 component화 할 것)
import {TimePicker} from "antd"
import 'antd/dist/antd.min.css'
const format = "HH:mm";
const defaultMinuteStep = 30;

//RangePicker
const {RangePicker} = DatePicker


const disabledDate = (current) => {
    // Can not select days before today
    return current < moment().endOf('day');
  };

function Home() {    
    let navigate = useNavigate();

    const [roomName, setRoomName] = useState()
    const [dateRange, setDateRange] = useState()
    const [timeRange, setTimeRange] = useState([moment('09:00', 'HH:mm'),moment('22:00', 'HH:mm')])

    return (
        <div class="Home">
            <HomeCardWrapper>
                <CardHeader>
                    <CardHeading>Schedch</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardInput
                            placeholder="약속 이름"
                            type="text"
                            maxLength={20}
                            onChange={(e)=>{setRoomName(e.target.value)}}
                            required
                        />
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}>
                            <h6>약속 날짜 설정</h6>
                            <RangePicker
                                onChange={(e)=> {
                                    setDateRange([e[0],e[1]])
                                    console.log(e[0].endOf("day"), e[1].endOf("day"))
                                }}
                                disabledDate={disabledDate}
                                required
                            />
                        </div>
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}>
                            <h6>약속 시간대 설정</h6>
                            <TimePicker.RangePicker
                                onChange={(e)=> {
                                    setTimeRange([e[0],e[1]])
                                    console.log(e[0].endOf("hours"), e[1].endOf("hours"))
                                }}
                                format={format}
                                minuteStep={defaultMinuteStep}
                                defaultValue={timeRange}
                                required
                            />
                        </div>
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}></div>
                        <CardButton type="button"
                            onClick={() => {
                                sendRoomRequest()
                            }}>방 만들기</CardButton>
                    </CardFieldset>
                </CardBody>
            </HomeCardWrapper>
        </div>
    );

    function sendRoomRequest() {
        console.log(roomName, dateRange, timeRange)
        const srcUrl = "http://ec2-43-200-23-249.ap-northeast-2.compute.amazonaws.com:8080/room/"
    
        let sendFlag = (roomName != undefined) && (dateRange != undefined)
        if (!sendFlag) {
            alert("전송실패!")
        }
        else {
            axios({
                method: 'post',
                url: srcUrl,
                data: {
                    "title": "test",
                    "startDay": "2022-10-12",
                    "endDay": "2022-10-14",
                    "startTime": "10:00:00",
                    "endTime": "12:00:00"
                }
            })
                .then((result) => {
                    console.log(result.data)
                    navigate(`/room/`+result.data);
                })
                .catch(() => { console.log('전송 실패') })
        }
    }
}


export default Home;