import { ApolloClient, InMemoryCache } from '@apollo/client';

export function createApolloClient() {
  console.log("createApolloClient");
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // API 엔드포인트 URL로 변경해야 할 수 있습니다.
    cache: new InMemoryCache(),
  });

  return client;
}
