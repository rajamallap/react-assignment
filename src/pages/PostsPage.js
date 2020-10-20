import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../redux/actions/postsActions'

import { Posts } from '../components/Posts'

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map(post => <Posts key={post.id} post={post} excerpt />)
  }

  return (
    <div style={{ marginLeft: "2rem" }}>
      <h1>Watches</h1>
      {renderPosts()}
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)
