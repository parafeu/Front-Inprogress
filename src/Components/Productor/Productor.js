import React from 'react'

export default class Productor extends React.Component{


    render(){
        return(
            <div>
                {this.props.name}
                {this.props.URL}
                <img src={this.props.URL} alt="saucissons"/>

            </div>
        )
    }
}




