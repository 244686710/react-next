import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
    const gotoA = () => {
        Router.push({
            pathname: '/pageA',
            query: {
                name: '苍井空'
            }
        })
    }
    Router.events.on('routeChangeStart', (...args) => {
        console.log('1.routeChangeStart -> 路由开始变化，参数为：', ...args)
    })
    Router.events.on('routeChangeComplate', (...args) => {
        console.log('2. routeChangeComplate-> 路由变化结束，参数为：', ...args)
    })
    return (
        <>
            <div>我是首页</div>
            <div>
                <div>
                    <Link href="/pageA?name=马里奥"><a>去a页面</a></Link>
                </div>
                <div>
                    <Link href="/pageB"><a>去b页面</a></Link>
                </div>
                <div>
                    <button onClick={gotoA}>去a页面</button>
                </div>
            </div>
        </>
    )

}


export default Home