import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IdentificationInputType = {
  text: Scalars['String'];
};

export type LanguageIdentificationPrediction = {
  __typename?: 'LanguageIdentificationPrediction';
  label: Scalars['Int'];
  lang: Scalars['String'];
  meta: Meta;
  prediction?: Maybe<Pred>;
  predictions: Array<PredType>;
  probability: Scalars['Float'];
};

export type LanguageTranslationPrediction = {
  __typename?: 'LanguageTranslationPrediction';
  from_: Scalars['String'];
  meta: Meta;
  sent: Scalars['String'];
  to: Scalars['String'];
  translation: Scalars['String'];
};

export type Meta = {
  __typename?: 'Meta';
  author: Scalars['String'];
  description: Scalars['String'];
  language: Scalars['String'];
  name: Scalars['String'];
  package: Scalars['String'];
  project: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  hello?: Maybe<Scalars['String']>;
  identify?: Maybe<LanguageIdentificationPrediction>;
  translate: LanguageTranslationPrediction;
};


export type MutationIdentifyArgs = {
  input: IdentificationInputType;
};


export type MutationTranslateArgs = {
  input: TranslationInputType;
};

export type Pred = {
  __typename?: 'Pred';
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type PredType = {
  __typename?: 'PredType';
  prediction?: Maybe<Pred>;
  probability: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
};

export type TranslationInputType = {
  from_: Scalars['String'];
  text: Scalars['String'];
  to: Scalars['String'];
};

export type IdentifyMutationVariables = Exact<{
  input: IdentificationInputType;
}>;


export type IdentifyMutation = { __typename?: 'Mutation', identify?: { __typename?: 'LanguageIdentificationPrediction', probability: number, prediction?: { __typename?: 'Pred', code: string, id: number, name: string } | null | undefined } | null | undefined };

export type TranslateMutationVariables = Exact<{
  input: TranslationInputType;
}>;


export type TranslateMutation = { __typename?: 'Mutation', translate: { __typename?: 'LanguageTranslationPrediction', translation: string } };


export const IdentifyDocument = gql`
    mutation Identify($input: IdentificationInputType!) {
  identify(input: $input) {
    prediction {
      code
      id
      name
    }
    probability
  }
}
    `;
export type IdentifyMutationFn = Apollo.MutationFunction<IdentifyMutation, IdentifyMutationVariables>;

/**
 * __useIdentifyMutation__
 *
 * To run a mutation, you first call `useIdentifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIdentifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [identifyMutation, { data, loading, error }] = useIdentifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIdentifyMutation(baseOptions?: Apollo.MutationHookOptions<IdentifyMutation, IdentifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IdentifyMutation, IdentifyMutationVariables>(IdentifyDocument, options);
      }
export type IdentifyMutationHookResult = ReturnType<typeof useIdentifyMutation>;
export type IdentifyMutationResult = Apollo.MutationResult<IdentifyMutation>;
export type IdentifyMutationOptions = Apollo.BaseMutationOptions<IdentifyMutation, IdentifyMutationVariables>;
export const TranslateDocument = gql`
    mutation Translate($input: TranslationInputType!) {
  translate(input: $input) {
    translation
  }
}
    `;
export type TranslateMutationFn = Apollo.MutationFunction<TranslateMutation, TranslateMutationVariables>;

/**
 * __useTranslateMutation__
 *
 * To run a mutation, you first call `useTranslateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTranslateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [translateMutation, { data, loading, error }] = useTranslateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTranslateMutation(baseOptions?: Apollo.MutationHookOptions<TranslateMutation, TranslateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TranslateMutation, TranslateMutationVariables>(TranslateDocument, options);
      }
export type TranslateMutationHookResult = ReturnType<typeof useTranslateMutation>;
export type TranslateMutationResult = Apollo.MutationResult<TranslateMutation>;
export type TranslateMutationOptions = Apollo.BaseMutationOptions<TranslateMutation, TranslateMutationVariables>;