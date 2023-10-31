import { Outlet } from 'react-router-dom'
const layouts = () => {
    return <>
        <h1>这是导航页</h1>
        <Outlet/>
    </>
}

export default layouts