import React from 'react';

import '../../Themes/master.scss';

export default class ThemeProvider extends React.Component{
    render(){
        return(
            <div className={this.props.color}>{this.props.children}</div>
        )
    }
}