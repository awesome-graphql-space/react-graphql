const TWEET_SUBSCRIPTION = gql`
  subscription tweetSubscription {
    tweetSubscription {
      node {
        id
        text
        upload
        views
        author
      }
    }
  }
`