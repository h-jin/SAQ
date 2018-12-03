import React from 'react';
import { Collapse, Checkbox, Row } from 'antd';
import {v4} from "uuid";
import '../app.css';

const Panel = Collapse.Panel;

const SAQSearchBar= ({criteria})=>{
    return (
        <Collapse defaultActiveKey={['0']}>
            {Object.entries(criteria).map((val,index)=>(
                 <Panel header={val[0]} key={index}>
                    <Checkbox.Group style={{ width: '100%' }}>                       
                        {val[1].map(v=>(
                            <Row>
                                <Checkbox key={v4()} value={v}>{v}</Checkbox>
                            </Row>
                        ))}
                    </Checkbox.Group>
                 </Panel>
            ))}
        </Collapse>
    )
}
export default SAQSearchBar;