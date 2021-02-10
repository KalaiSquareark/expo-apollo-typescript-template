/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AmbassadorCollection
// ====================================================

export interface AmbassadorCollection_ambassadorCollections_edges_node {
  __typename: "AmbassadorCollectionsType";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface AmbassadorCollection_ambassadorCollections_edges {
  __typename: "AmbassadorCollectionsTypeCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: AmbassadorCollection_ambassadorCollections_edges_node;
}

export interface AmbassadorCollection_ambassadorCollections {
  __typename: "AmbassadorCollectionsTypeCountableConnection";
  edges: AmbassadorCollection_ambassadorCollections_edges[];
}

export interface AmbassadorCollection {
  /**
   * Ambassador Collections
   */
  ambassadorCollections: AmbassadorCollection_ambassadorCollections | null;
}

export interface AmbassadorCollectionVariables {
  first?: number | null;
}
