import React from 'react'

function HelloWorld() {
  return (
    <div>
      <h1>Hello World Component</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a>
      </nav>
      <main>
        <section>
          <h2>The Truth</h2>
          <p>JavaScript is pretty awesome</p>
        </section>
      </main>
    </div>
  )
}

describe('Sprint 7 Challenge Learner Tests', () => {
  /*
  WRITE THE FOLLOWING TESTS:

  Test the <HelloWorld /> component above...
    [1] use screen.getByText to find the element with the text "Hello World Component"
    [2] renders a link that reads "Home"
    [3] renders a link that reads "About"
    [4] renders a link that reads "Blog"
    [5] renders a text that reads "The Truth"
    [6] renders a text that reads "JavaScript is pretty awesome"
    [7] renders exactly 3 links
  */

  // RESTORE SANITY:
  test('sanity', () => {
    expect(true).toBe(true)
  })
})
