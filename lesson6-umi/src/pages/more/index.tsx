import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table'
import {queryTableData} from './service'
import styles from './index.less';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'city',
    key: 'city',
  },
];

// UI层和数据层分开
export default class More extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {};
  }

  // 暗号: 塞拉利昂
  render() {
    return (
      <PageHeaderWrapper className={styles.more}>
        <ProTable 
          headerTitle="查询表格"  
          columns={columns}  
          request={(params) => queryTableData(params)}
          rowKey="id"
          />
      </PageHeaderWrapper>
    );
  }
}
