import React from 'react'
import { shallow } from 'enzyme'
import { Layout } from './Layout'

describe('Layout component', () => {
  it('Renders children', () => {
    const layout = shallow(
      <Layout>
        <span>test</span>
      </Layout>
    )

    expect(layout.containsMatchingElement(<span>test</span>)).toBeTruthy()
  })
})
