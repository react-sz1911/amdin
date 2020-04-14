import React, { Component } from "react";
import { Card, Table, Button, Modal, notification, Spin, Popconfirm, message } from 'antd'
import style from './index.module.less'
import adminapi from '../../api/admin.js'

const columns =[
    {
        title: 'id',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: '帐号名',
        dataIndex: 'userName',
        key: 'userName',
    },

]

class Admins extends Component {
    state = { dataSource:[]}
    async componentDidMount(){
        let result = await adminapi.list()
        this.setState({dataSource:result.adminList})
    }
    render(){
        let {dataSource} = this.state
        return (
            <div className={style.admins}>
                <Card title='管理员列表'>
                    <Table dataSource={dataSource} columns={columns} rowKey='_id'></Table>
 
                    <Button type='primary' icon='plus'
                        onClick={() => { this.setState({ visible: true }) }}>

                        添加</Button>
                </Card>
            </div>
        );
    }
}

export default Admins;