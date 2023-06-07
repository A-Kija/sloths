import { Component } from 'react';


class Zebras extends Component {

    constructor() {
        super();
        this.state = { count: 1 };
        this.blaBla = 1;
    }

    up() {
        this.setState(c => ({ count: c.count + 1 }))
    }

    componentDidMount() {
        console.log(this.blaBla);
    }


    render() {
        return (
            <>
                <h1 style={{
                    color: this.props.color
                }}>Hello, Zebrai, Nr {this.state.count}</h1>
                <h2 style={{
                    cursor: 'pointer',
                    userSelect: 'none'
                }} onClick={_ => this.up()}>UP</h2>
            </>
        )
    }



}

export default Zebras;