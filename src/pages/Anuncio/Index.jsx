import React from 'react';

class Anuncio extends React.Component {
    render(){
        return (<div>Anuncio {this.props.params}</div>);
    };
}

export default Anuncio;