import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './styleProducteur.scss';

export default class Productor extends React.Component {


    render() {
        
        return (
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
                            Vente de viandes produites à la ferme (boeuf, veau de lait, porc), fabrication de charcuterie,
                            vente de produits du terroir.
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        )
    }
}




