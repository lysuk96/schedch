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

//TimePicker (나중에 공부해서 component화 할 것)
import {TimePicker} from "antd"
import 'antd/dist/antd.min.css'

const dateRangeFormat = "YYYY-MM-DD"
const timeRangeFormat = "HH:mm";
const googleTimeRangeFormat = "HH:mm:ss";
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
    const [timeRange, setTimeRange] = useState()

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
                                    // console.log(e[0].endOf("day"), e[1].endOf("day"))
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
                                    // console.log(e[0].format(timeRangeFormat), e[1].format(timeRangeFormat))
                                }}
                                format={timeRangeFormat}
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
        // console.log(roomName, dateRange, timeRange)
        const srcUrl = process.env.REACT_APP_API_URL + 'room/'

        let sendFlag = (roomName != undefined) && (dateRange != undefined) && (timeRange != undefined)
        if (!sendFlag) {
            alert("방제목과 약속 날짜를 설정해주세요")
        }
        else {
            axios({
                method: 'post',
                url: srcUrl,
                data: {
                    "title": roomName,
                    "startDay": dateRange[0].format(dateRangeFormat),
                    "endDay": dateRange[1].format(dateRangeFormat),
                    "startTime": timeRange[0].format(googleTimeRangeFormat),
                    "endTime": timeRange[1].format(googleTimeRangeFormat),
                }
            })
                .then((result) => {
                    console.log(result.data)
                    navigate(`/room/`+result.data.uuid);
                })
                .catch(() => { console.log('전송 실패') })
        }
    }
}


export default Home;