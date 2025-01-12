import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import PostListItem from './PostListItem';

const PostList = () => {
  return (
    <div className="flex flex-col gap-12 mb-8">
        <PostListItem />
        <PostListItem />
        <PostListItem />
    </div>
    // <InfiniteScroll
    //   dataLength={allPosts.length}
    //   next={fetchNextPage}
    //   hasMore={!!hasNextPage}
    //   loader={<h4>Loading more posts...</h4>}
    //   endMessage={
    //     <p>
    //       <b>All posts loaded!</b>
    //     </p>
    //   }
    // >
    //   {allPosts.map((post) => (
    //     <PostListItem key={post._id} post={post} />
    //   ))}
    // </InfiniteScroll>
  )
}

export default PostList