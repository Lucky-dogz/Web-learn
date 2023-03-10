// react相关
import React from 'react'
import { Outlet } from 'react-router-dom';

// 资源相关
import Header from './components/Header';
import Aside from './components/Asider';
import Bread from './components/Bread';

// antd UI相关
import { } from '@ant-design/icons';
import { Layout } from 'antd';
import { connect } from 'react-redux';

const { Content } = Layout;
function App(props) {

    return (
        <Layout id='app'>
            {/* 头部,key是关键字，唯一识别该组件，若发生变化则重渲染组件*/}
            <Header key={props.myKey} />

            {/* 容器 */}
            <Layout className='container'>
                <Aside />
                <Content>
                    <div className='container_box'>
                        <Bread />
                        <div className='content_box'>
                            <Outlet />
                        </div>
                    </div>
                </Content>
            </Layout>

            {/* 底部 */}
            <footer>Respect  |  Copyright &copy;
                2022 Author Driving_Lucker.
            </footer>
        </Layout>

    )


}

// 修改App传给Header的key，以此刷新Header组件
const mapStateToProps = (state) => {
    return {
        myKey: state.myKey
    }
}

export default connect(mapStateToProps)(App)