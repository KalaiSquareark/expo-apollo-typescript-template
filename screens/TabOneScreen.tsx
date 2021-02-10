import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { gql, useQuery } from "@apollo/client";
import {
  AmbassadorCollection,
  AmbassadorCollectionVariables,
} from "./gqlTypes/AmbassadorCollection";

const query = gql`
  query AmbassadorCollection($first: Int) {
    ambassadorCollections(first: $first) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default function TabOneScreen() {
  const { loading, error, data } = useQuery<
    AmbassadorCollection,
    AmbassadorCollectionVariables
  >(query, {
    variables: {
      first: 1,
    },
  });
  console.log(loading, data, error);
  if (loading) return <Text> Loading ...</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Onee</Text>
      <Text style={styles.title}>
        {data?.ambassadorCollections?.edges[0].node.id}
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
