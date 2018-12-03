import React from 'react';
import { Card } from 'antd';
import '../app.css';

const { Meta } = Card;
const SAQCard = ({product})=>{
    const {Title, ClickUri, Excerpt, raw:{tpthumbnailuri}} = product;
    return (
        <a href={ClickUri} target="_blank">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img src={tpthumbnailuri} />}
            >
                <Meta
                    title={Title}
                    description={Excerpt}
                />
            </Card>
        </a>
    )
}
export default SAQCard;