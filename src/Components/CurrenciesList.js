import React from 'react'
//GRAPHQL
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getAllCurrencies = gql`
    {
        currencies {
            label
            symbol
        }
    }
`

class CurrenciesList extends React.Component {
    render() {
        console.log(this.props.data.currencies);

        return (
            <div>CurrenciesList</div>
        )
    }
}

export default graphql(getAllCurrencies)(CurrenciesList);