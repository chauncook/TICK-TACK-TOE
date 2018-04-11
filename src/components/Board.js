import React, { Component } from 'react'
import BlankPiece from './BlankPiece'
import XPiece from './XPiece'
import OPiece from './OPiece'

class Board extends Component {
    constructor() {
        super()
        console.log('Board.constructor(')
    }

    componentWillMount() {
        console.log('Board.componentWillMount')
    }

    render() {
        console.log('Board.render()')
        return (
            <div>
                <div class='components'>


                        <div class='flex-container'>
                            <div><XPiece /></div>
                            <div><OPiece /></div>
                            <div><BlankPiece /></div>
                        </div>

                        <div class='flex-container'>
                            <div><XPiece /></div>
                            <div><BlankPiece /></div>
                            <div><OPiece /></div>
                        </div>

                        <div class='flex-container'>
                            <div><BlankPiece /></div>
                            <div><OPiece /></div>
                            <div><XPiece /></div>
                        
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount() {
        console.log('Board.componentDidMount')

    }
}

export default Board