import styles from "./login.module.scss"

import initLoginBg from "./init.ts"
import { ChangeEvent, useEffect, useState } from "react"
import { Button, Input, Space } from "antd"

const view = () => {

    // 加载完这个组件之后加载背景
    useEffect(() => {
        initLoginBg()
        window.onresize = function () { initLoginBg() }
    }, [])

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [code, setCode] = useState<string>("")

    const getUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const getPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const getCode = (e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)

    const login = () => {
        console.log(username + '-' + password + '-' + code);

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
                            <div className={styles.captchaImg}>
                                <img height="38" src="https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2Ffd039245d688d43fbc33351da7e6fb170cf43b4f.jpeg%40f_auto%3Ftoken%3D644519210bc2082a7aee20756dd22f6c&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1684947600&t=03aba944b4914759f7897dda79b53abb" alt="" />
                            </div>
                        </div>
                        <Button type='primary' className={styles.loginBtn} onClick={login} block>登录</Button>
                    </Space>
                </div>

            </div>
        </div>
    )
}

export default view