import React from "react";
import { Wrapper , Card , Text , Img} from "./style";
import Bench from '../../assets/images/Card.png'
import Calculator from '../../assets/images/Calculator.png'
import Camera from '../../assets/images/Camera.png'
function DateC() {
    return (
        <div>
            <Wrapper>
                <Card>
                    <Img>
                    <img src={Bench} alt="" />
                    </Img>
                    <Text>
                    <h4>Benchmarks</h4>
                    <p>See how you stack up against comparable <br/> companies in similar stages.</p>
                    </Text>
                </Card>
                <Card>
                    <Img>
                    <img src={Calculator} alt="" />
                    </Img>
                    <Text>
                    <h4>Pricing Audit</h4>
                    <p>See how you stack up against comparable <br/> companies in similar stages.</p>
                    </Text>
                </Card>
                <Card>
                    <Img>
                    <img src={Camera} alt="" />
                    </Img>
                    <Text>
                    <h4>Retention Audit</h4>
                    <p>See how you stack up against comparable <br/> companies in similar stages.</p>
                    </Text>
                </Card>
            </Wrapper>
        </div>
    )
}
export default DateC