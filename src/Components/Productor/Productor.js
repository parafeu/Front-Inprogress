import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './styleProducteur.scss';

export default class Productor extends React.Component{


    render(){
        return(
            <div >

                <Card className="product-container">
                    <CardHeader
                        avatar={
                            <Avatar>
                                R
                            </Avatar>
                        }
                        title={this.props.name}
                        subheader="September 14, 2016"
                    />
                    <CardMedia className="imageProd"
                        image={this.props.src}
                        title="saucissons"
                    />
                    <CardContent>
                        <Typography component="p">
                            {this.props.descriptif}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {
                            this.props.info && (
                            <Button size="small" color="primary" target="_blank" href={this.props.info} >
                             Plus d'info
                            </Button>
                            )
                        }
                        
                    </CardActions>     
                </Card>
            </div>
        )
    }
}




