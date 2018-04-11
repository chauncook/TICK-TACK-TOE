import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import XPiece from '../XPiece'

it('shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<XPiece />)
    const result = renderer.getRenderOutput()



    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(

    )
})