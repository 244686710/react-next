import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/one')) // 组件懒加载

function Time() {
    const [nowTime, setTime] = useState(Date.now())
    // 外部库，实现懒加载
    const changeTime = async () => {
        const moment = await import('moment')
        setTime((moment.default(Date.now()).format()))
    }
    return (
        <>
            <div>显示时间为：{nowTime}</div>
            <One></One>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}

export default Time