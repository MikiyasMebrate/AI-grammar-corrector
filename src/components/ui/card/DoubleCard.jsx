import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const DoubleCard = ({countChar, countWord}) => (
  <Row gutter={[16,16]}>
    <Col lg={12} style={{width : "100%"}}>
      <Card bordered >
        <Statistic
          title="Word"
          value={countWord}
        />
      </Card>
    </Col>
    <Col lg={12} style={{width : "100%"}}>
      <Card>
        <Statistic
          title="Character"
          value={countChar}
        />
      </Card>
    </Col>
  </Row>
);
export default DoubleCard;