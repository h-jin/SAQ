import React, { Component } from 'react';
import { Layout, Input, Row, Col  } from 'antd';
import {v4} from "uuid"; 
import SAQCard from "./SAQCard";
import SAQSearchBar from "./SAQSearchBar";
import { getSearchCriteria } from "utils/processData";
import '../app.css';

const { Header, Content } = Layout;
const Search = Input.Search;

export default class SAQSearch extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({ type: "FETCH_ALL" });
    }
    onSelectCriteria = (checkedValue, category) =>{
        const { dispatch } = this.props;
        dispatch({ type: "UPDATE_CRITERIA", payload: {[`tp${category.toLowerCase()}`]: checkedValue} });
        dispatch({ type: "FETCH_FILTERED_PRODUCTS" });
    }
    render() {
        const { productList } = this.props;
        console.log(productList);
        return (
            <Layout>
                <Header>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <h2 style={{color: "white"}}>SAQ</h2>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Search
                                placeholder="search"
                                onSearch={value => console.log(value)}
                                enterButton
                            />
                        </Col>
                    </Row>                    
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Row type="flex">
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {
                                productList.results&&
                                    <SAQSearchBar 
                                        criteria={getSearchCriteria(productList.results)}
                                        onSelectCriteria={this.onSelectCriteria}
                                    />
                            }
                        </Col>
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                            <Row type="flex">
                                {productList.results&&productList.results.map(product=>(
                                        <SAQCard key={v4()} product={product}/>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}
