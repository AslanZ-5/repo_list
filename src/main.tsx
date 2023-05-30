import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { Provider } from 'react-redux'
import { store } from './store/store.ts';
import App from './App/App.tsx'
import './index.css'


export const getApolloClient = () => {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <ApolloProvider client={getApolloClient()}>
    <App />
</ApolloProvider>
</Provider>
  </React.StrictMode>,
)
