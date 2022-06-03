import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Route, Routes } from 'react-router-dom';
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
import Loader from "../components/Loader";

//css
import "./css/home.css";


function Login() {    
    let {roomId} = useParams() 
    let navigate = useNavigate();
    let start = true
    
    let [userName, setUserName] = useState()
    let [roomInfo, setRoomInfo] = useState(null)
    let [loader, setLoader] = useState(true)

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

    return (
        <div class="Home">
            <HomeCardWrapper>
                <CardHeader>
                    <CardHeading>Schedch</CardHeading>
                </CardHeader>
                {(
                    loader ? <Loader type="spin" color="black" message= "약속정보를 불러오는 중입니다" ></Loader> :
                        roomInfo != null
                            ?
                            (
                                <div>
                                    <h6>약속이름 : {roomInfo.title}</h6>
                                    <h6>{roomInfo.startDay} ~ {roomInfo.endDay}</h6>
                                </div>

                            )
                            : null
                )
                }

                <CardBody>
                    <CardFieldset>
                        <CardInput
                            placeholder="내 이름 입력"
                            type="text"
                            maxLength={20}
                            onChange={(e) => { setUserName(e.target.value) }}
                            required
                        />
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}></div>
                        <CardButton type="button"
                            onClick={() => {
                                sendLoginRequest()
                            }}>방 들어가기</CardButton>
                    </CardFieldset>
                </CardBody>
            </HomeCardWrapper>
        </div>
    );

    function sendLoginRequest() {
        let sendFlag = (userName != undefined)
        if (!sendFlag) {
            alert("이름을 입력해주세요.")
        }
        else {
            axios({
                method: 'post',
                url: srcUrl + '/user',
                data: {
                    "username":userName,
                }
            })
                .then((result) => {
                    console.log(result.data)
                    navigate( `user/`+userName);
                })
                .catch(() => { console.log('전송 실패') })
        }
    }
}

export default Login;