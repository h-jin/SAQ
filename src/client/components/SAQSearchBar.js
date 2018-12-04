import React from 'react';
import { Collapse, Checkbox, Row, Radio } from 'antd';
import {v4} from "uuid";
import '../app.css';

const Panel = Collapse.Panel;

const SAQSearchBar= ({criteria, onSelectCriteria, onSelecRecommandation })=>{ 
    return (
        <Collapse defaultActiveKey={['intelligent']}>
            <Panel header="Intelligent Recommandation" key="intelligent">  
                <Radio.Group onChange={onSelecRecommandation}>
                    <Radio value="date">First Date</Radio>
                    <Radio value="anniversary">Anniversary</Radio>
                </Radio.Group>
            </Panel>
            
            {Object.entries(criteria).map((val,index)=>(
                 <Panel header={val[0]} key={index}>  
                    <Checkbox.Group style={{ width: '100%' }} onChange={e=>onSelectCriteria(e, val[0])}>                       
                        {val[1].map(v=>(
                            <Row key={v4()}>
                                <Checkbox value={v}>{v}</Checkbox>
                            </Row>
                        ))}
                    </Checkbox.Group>
                 </Panel>
            ))}
        </Collapse>
    )
}
export default SAQSearchBar;