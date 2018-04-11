import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import BlankPiece from '../BlankPiece'

it('shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<BlankPiece />)
    const result = renderer.getRenderOutput()

    console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        
    )
})