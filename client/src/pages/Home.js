import React, { useState } from "react";
import { useNavigate, Route, Routes } from 'react-router-dom';
import Select from 'react-select';

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

//css
import "./css/home.css";

//dummy
import PastDummy from "../api/dummy/PastDummy";

//TimePicker (나중에 공부해서 component화 할 것)
import {TimePicker} from "antd"
import 'antd/dist/antd.min.css'
const format = "HH:mm";
const defaultHour = ["09:00", "22:00"];
const defaultMinuteStep = 30;




function Home() {
    let navigate = useNavigate()
    
    const [past0, setPast0] = useState(PastDummy[0])
    const [past1, setPast1] = useState(PastDummy[0])

    return (
        <div class="Home">
            <HomeCardWrapper>
                <CardHeader>
                    <CardHeading>Schedch</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardInput placeholder="약속 이름" type="text" required />
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}>
                            <h6>약속 주차 설정</h6>
                        </div>
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}>
                            <h6>약속 시간대 설정</h6>
                            <TimePicker.RangePicker status="error" format={format} minuteStep={defaultMinuteStep} defaultPickerValue={defaultHour}/>
                        </div>
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}></div>
                        <CardButton type="button"
                            onClick={() => {
                                navigate(`/room`);
                            }}>방 만들기</CardButton>
                    </CardFieldset>
                </CardBody>
            </HomeCardWrapper>
        </div>
    );
}

export default Home;