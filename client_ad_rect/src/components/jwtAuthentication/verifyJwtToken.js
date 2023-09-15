import React, { useState } from 'react'
import axios from 'axios'
import { Button, Checkbox, Form, Input } from 'antd';

const VerifyJwtToken = (props) => {

    const [formVerifyToken] = Form.useForm();

    const SubmitVerify = () => {
        console.log("SubmitVerify");

        const token = sessionStorage.getItem("token");
        console.log(token);

        if (token == null) {
            alert('Please get token first.');
        } else {
            axios({
                method: 'POST',
                url: 'http://127.0.0.1:8800/test/verifyTokenTest',
                data: {
                    token: token,
                }
            }
            ).then((response) => {
                console.log(response.status);
                console.log(response.data);
                console.log(response.data.message);

                /*if (response.data.success === true) {
                    sessionStorage.setItem('userName', response.data.userName)
                    sessionStorage.setItem('token', response.data.token)
                    sessionStorage.setItem('loginID', response.data.loginID)
                    // 跳轉
                    alert('登入成功')
                    window.location.href = `${window.location.origin}`
                }
 
                if (response.data.login_check === false) {
                    alert('帳號有誤')
                    return false
                }
 
                if (response.data.password_check === false) {
                    alert('密碼有誤')
                    return false
                }*/
            }).catch((error) => {
                //console.log(error));
                console.log(error.response.data.message);
            })
        }
    }

    return (
        <Form form={formVerifyToken}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" onClick={SubmitVerify}>
                    Verify
                </Button>
            </Form.Item>
        </Form>
    );
}

export default VerifyJwtToken;