import React, { Component } from 'react'

export default class XPiece extends Component {
    constructor() {
        super()
        console.log('XPiece.constructor()')
    }

    componentWillMount() {
        console.log('XPiece.componentWillMount()')
    }

    render() {
        console.log('XPiece.render()')
        return (
            <div>
                X
    </div>
        )
    }

    componentDidMount() {
        console.log('XPiece.componentDidMount()')
    }

}