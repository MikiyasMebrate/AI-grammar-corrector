import { Content, } from "antd/es/layout/layout";
import { Button, Card, Col, Divider, Empty, Flex, Row, theme } from 'antd';
import DoubleCard from "./card/DoubleCard";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const MainContent = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

      let [countWord, setCountWord] = useState(0)
      let [countChar, setCountChar] = useState(0)


      const handleOnChange = (e) => {
        setCountChar(e.target.value.length)

        const words = e.target.value.trim().split(/\s+/);
        
        words.join("") == '' ? setCountWord(0)  :setCountWord(words.length);
        
      }

    return (
        <>
        <Content  style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>

            <Row gutter={12}>


                <Col sm={24} lg={12}>
                    <Card bordered hoverable >
                        <DoubleCard countWord={countWord} countChar={countChar}  />
                        <Divider />
                        <form>
                            <TextArea placeholder="Type or past your text" onChange={handleOnChange} style={{width : "100%", height : "50vh", padding : 20}}  />
                            <Flex justify="end">
                            <Button  style={{marginTop : 10}}  type="primary">Check</Button>
                            </Flex>
                        </form>
                    </Card>
                </Col>


                <Col lg={12}> 
                <Card style={{height : "77vh"}} title={"Enhanced Text"} hoverable>
                   <Flex justify="center" >
                       <Empty />
                   </Flex>
                </Card>
                </Col>
            </Row>
        </Content>
        </>
    );
}
 
export default MainContent;