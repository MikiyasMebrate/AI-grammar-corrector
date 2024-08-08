import { Content, } from "antd/es/layout/layout";
import { Button, Card, Col, Divider, Empty, Flex, Row, Spin, Typography, theme } from 'antd';
import DoubleCard from "./card/DoubleCard";
import { useState } from "react";


import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { GoogleGenerativeAI } from "@google/generative-ai";

const schema = yup.object().shape({
    text : yup.string().required().min(1)
})




const MainContent = () => {
    const KEY = import.meta.env.VITE_GEMINI_API_KEY

    const genAI = new GoogleGenerativeAI(KEY);


    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        generationConfig: {
            candidateCount: 1,
            temperature: 1.0,
          },
     });


     const {handleSubmit, register, formState : {isSubmitting}} = useForm({
        resolver :yupResolver(schema)
     })

     const [formattedText, setFormattedText] = useState(null)


    


    const chatCompletion = async  (text) =>{ 
        console.log(text)       
         const prompt = `Correct the grammar in the following text:${text.text}`
         const result = await model.generateContent(prompt);
         setFormattedText(result.response.text())
         console.log(formattedText)
    }



    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    let [countWord, setCountWord] = useState(0)
    let [countChar, setCountChar] = useState(0)


    const handleOnChange = (e) => {
        setCountChar(e.target.value.length)

        const words = e.target.value.trim().split(/\s+/);

        words.join("") == '' ? setCountWord(0) : setCountWord(words.length);

    }

    return (
        <>
            <Content style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: "100vh",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}>

                <Row gutter={[12, 12]}>


                    <Col lg={12} style={{ width: "100%" }}>
                        <Card bordered hoverable >
                            <DoubleCard countWord={countWord} countChar={countChar} />
                            <Divider />
                            <form onSubmit={handleSubmit(chatCompletion)} >
                                <textarea  {...register("text")} placeholder="Type or past your text"  onChange={handleOnChange}  style={{ width: "100%", height: "50vh", padding: 20 }}  />
                                <Flex justify="end">
                                    <Button  htmlType="submit" style={{ marginTop: 10 }} type="primary">{isSubmitting ? 'Loading' : 'Check'}</Button>
                                </Flex>
                            </form>
                        </Card>
                    </Col>


                    <Col lg={12} style={{ width: "100%" }} >
                        <Card style={{ height: "77vh" }} title={"Make a Confidence with Gemini"} hoverable>
                               
                                {!isSubmitting && formattedText &&  
                                <>
                                 <Typography.Title> Corrected text </Typography.Title>
                                  <Typography.Text  copyable >{formattedText}</Typography.Text>
                                </>
                                }

                                {!isSubmitting && !formattedText && <Flex justify="center"><Empty /></Flex> }
                                
                                {isSubmitting && <Flex justify="center"> <Spin size="large" /></Flex> }
                        </Card>
                    </Col>


                </Row>
            </Content>
        </>
    );
}

export default MainContent;