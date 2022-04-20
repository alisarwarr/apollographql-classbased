import React from 'react'
//GRAPHQL
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getProductById = gql`
    {
        product(id: "xbox-series-s") {
            name
        }
    }
`

class Product extends React.Component {
    render() {
        console.log(this.props.data.product);

        return (
            <div>Currency</div>
        )
    }
}

export default graphql(getProductById)(Product);