import { describe, it, expect } from 'vitest'
import { getTotalLikes, searchPosts } from './posts'

const samplePosts = [
  { id: 1, title: 'Learning React', likes: 5 },
  { id: 2, title: 'Web Development', likes: 3 },
  { id: 3, title: 'React Practice', likes: 2 }
]

describe('Post utility functions', () => {
  it('calculates the total likes', () => {
    expect(getTotalLikes(samplePosts)).toBe(10)
  })

  it('searches posts by title', () => {
    const results = searchPosts(samplePosts, 'React')

    expect(results).toHaveLength(2)
  })

  it('returns an empty array when no post matches', () => {
    const results = searchPosts(samplePosts, 'Python')

    expect(results).toHaveLength(0)
  })
})