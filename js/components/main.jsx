import React, {Component} from 'react';
import { IndexLink } from 'react-router';

class Main extends Component{
    render(){
        return(
            <div className='app__container'>
                <header className='container'>
                    <nav>
                        <ul className='navigation'>
                            <li><IndexLink to='/'>Home</IndexLink></li>
                            <li><IndexLink to='/create'>Create</IndexLink></li>
                            <li><IndexLink to='/preview'>Preview</IndexLink></li>
                            <li><IndexLink to='/export'>Export</IndexLink></li>
                        </ul>
                    </nav>
                </header>
                {this.props.children}
            </div>
        )
    }
}

module.exports = Main;