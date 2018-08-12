const TWEET_SUBSCRIPTION = gql`
  subscription tweetSubscription {
    tweetSubscription {
      node {
        id
        text
        upload
        slug
        views
        user {
          author
        }  
      }
    }
  }
`