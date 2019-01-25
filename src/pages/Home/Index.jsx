import React from 'react';

class Home extends React.Component {
    constructor(){
        super();
        this.search = this.search.bind(this);
    }

    render(){
        return (
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input onChange={this.search} className="mdl-textfield__input" type="text" id="search" />
        <label className="mdl-textfield__label" htmlFor="search">Digite para buscar...</label>
        </div>
        );
    };
    

    search(event){
        console.log(event.currentTarget.value);
    }
}

export default Home;