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
                            <a>약속 주차 설정</a>
                        </div>
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}>
                            <a>약속 시간대 설정</a>
                            <Select
                                options={PastDummy}
                                onChange={setPast0}
                                isSearchable={false}
                            />
                            <a>부터</a>
                            <Select
                                options={PastDummy}
                                onChange={setPast1}
                                isSearchable={false}
                            />
                            <a>까지</a>

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