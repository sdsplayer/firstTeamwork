import React from "react";
import { Wrapper , Index , Text} from "./style";
import Logo from '../../assets/images/logo2.jpg'
function DateB() {
    return (
        <div>
            <Wrapper>
                <Text>
                    <h1>In-depth metrics</h1>
                    <p className="vertical">Accurate, real-time reporting at your fingertips.<br/> Getting data has never been easier.</p>
                    <p className="more">Learn more</p>
                </Text>
                <Index>
                    <img width={500} src={Logo} alt="" />
                </Index>
            </Wrapper>
        </div>
    )
}
export default DateB 