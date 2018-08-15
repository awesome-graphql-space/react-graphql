import React, { Component } from "react";
import { Query } from "react-apollo";
import InfiniteScroll from "react-infinite-scroller";
import { TWEETS } from "../graphql/query";
import { TweetItem } from "../components/TweetItem";
import Tweet from "../components/Tweet";

class HomePage extends Component {
  render() {
    return (
      <div style={{ paddingLeft: 180, paddingRight: 180 }}>
        <br />
        <Tweet />
        <br />
        <div>
          <Query query={TWEETS}>
            {({ loading, error, data, fetchMore }) => {
              if (loading) {
                return <div>loading</div>;
              }

              if (error) {
                return <div>error</div>;
              }

              if (data.tweets === null || data.tweets.length < 1) {
                return <div>empty</div>;
              }

              return (
                <InfiniteScroll
                  pageStart={0}
                  hasMore={true}
                  loader={
                    <div className="loader" key={0}>
                      Loading ...
                    </div>
                  }
                >
                  {data.tweets.map(res => (
                    <TweetItem tweet={res} key={res.id} />
                  ))}
                </InfiniteScroll>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default HomePage;
