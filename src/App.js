import React from 'react';
//GRAPHQL
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


import CurrenciesList from './Components/CurrenciesList';    //GET ALL ITEMS
import Product from './Components/Product';                  //GET ONE ITEM


const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});


function App() {
    return (
        <ApolloProvider client={client}>

            <CurrenciesList
            />

            <Product
            />

        </ApolloProvider>
    )
}

export default App;