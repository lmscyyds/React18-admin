import styles from "./login.module.scss"

import initLoginBg from "./init.ts"
import { useNavigate } from "react-router-dom"
import { ChangeEvent, useEffect, useState } from "react"
import { Button, Input, Space, message } from "antd"
import { captchaApi, loginApi } from "@/request/api.ts"

const View = () => {
    const navigateTo = useNavigate()

    // 加载完这个组件之后加载背景
    useEffect(() => {
        initLoginBg()
        getCaptchaImg()
        window.onresize = function () { initLoginBg() }
    }, [])

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [code, setCode] = useState<string>("")
    const [captchaImg, setCaptchaImg] = useState("")

    const getUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const getPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const getCode = (e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)

    const login = async () => {
        console.log(username + '-' + password + '-' + code);
        if (!username.trim() || !password.trim() || !code.trim()) {
            message.warning("请完整输入信息")
            return
        }

        const res = await loginApi({
            username, password, code, uuid: localStorage.getItem("uuid") as string
        })
        if (res.code === 200) {
            message.success("登录成功")
            localStorage.setItem("token", res.token)
            navigateTo("/page1")
            localStorage.removeItem("uuid")
        }
    }

    const getCaptchaImg = async () => {
        const captchaAPIRes = await captchaApi()
        console.log(captchaAPIRes);

        if (captchaAPIRes.code === 200) {
            setCaptchaImg('data:image/gif;base64,' + captchaAPIRes.img)
            localStorage.setItem("uuid", captchaAPIRes.uuid)
        }

    }

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: 'block' }}></canvas>
            <div className={styles.loginBox}>
                {/* 标题 */}
                <div className={styles.title}>
                    <h1>前端乐哥&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>

                {/* 表单 */}
                <div>
                    <Space direction="vertical" size="large" style={{
                        display: 'flex'
                    }}>
                        <Input placeholder="用户名" onChange={getUsername} />
                        <Input.Password placeholder="密码" onChange={getPassword} />
                        <div className={styles.captchaBox}>
                            <Input placeholder="验证码" onChange={getCode} />
                            <div className={styles.captchaImg} onClick={getCaptchaImg}>
                                <img height="38" src={captchaImg} alt="" />
                            </div>
                        </div>
                        <Button type='primary' className={styles.loginBtn} onClick={login} block>登录</Button>
                    </Space>
                </div>

            </div>
        </div>
    )
}

export default View