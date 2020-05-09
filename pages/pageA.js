import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from 'axios'

const PageA = ({ list }) => {
    const router = useRouter()
    const {name} = router.query
    return (
        <>
            <div>PageA page</div>
            <p>名字是：{name}</p>
            <ul>{
                list.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }</ul>
            <Link href="/">
                <a>
                    <span>返回首页</span>
                    <span>ICON</span>
                </a>
            </Link>
        </>
    )
}

PageA.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios.get('http://rap2.taobao.org:38080/app/mock/252753/getlist').then(
            (res) => {
                console.log('远程数据结果：', res)
                resolve(res.data)
            }
        )
    })

    return await promise
}

export default PageA;