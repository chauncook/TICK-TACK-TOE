import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import OPiece from '../OPiece'

it('shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<OPiece />)
    const result = renderer.getRenderOutput()



    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        
    )
})