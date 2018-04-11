import reacr from 'react';
import Board from '../Board';
import Renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import BlankPiece from '../BlankPiece';
import XPiece from '../XPiece';
import OPiece from '../OPiece';

it('shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Board />)
    const result = renderer.getRendererOutput()

    console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(

    )
})