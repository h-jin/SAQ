import React, { Component } from 'react';
import { Layout, Input, Row, Col  } from 'antd';
import {v4} from "uuid"; 
import SAQCard from "./SAQCard";
import SAQSearchBar from "./SAQSearchBar";
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
    onSelecRecommandation = e => { // call intelligent recommdantion API
        const { dispatch } = this.props;
        dispatch({ type: `FETCH_${e.target.value.toUpperCase()}` });
    }
    onSearch = value => {
        console.log(value);
        const { dispatch } = this.props;
        dispatch({ type: "FETCH_SEARCHED_PRODUCTS", payload: value });
    }
    render() {
        const { productList, allCriteria } = this.props;
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
                                onSearch={this.onSearch}
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
                                        criteria={allCriteria}
                                        onSelectCriteria={this.onSelectCriteria}
                                        onSelecRecommandation={this.onSelecRecommandation}
                                    />
                            }
                        </Col>
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                            <Row type="flex">
                                {
                                    productList.results&&productList.results.length>0? 
                                        productList.results.map(product=>(
                                            <SAQCard key={v4()} product={product}/>
                                    )): <h2>No Products found.</h2>
                                }
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}
