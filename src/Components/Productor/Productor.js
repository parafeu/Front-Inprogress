import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './style.scss';

export default class Productor extends React.Component {


    render() {
        return (
       
            <div >
                <Grid container spacing={8}>
                     {this.props.data.fermes.map ((ferme) =>
                    <Grid item xs={6}>
                        <Card className="product-container">
                            <CardHeader
                                title={ferme.name}
                                subheader={ferme.name2}
                            />
                            <CardMedia className="imageProd"
                                image={ferme.src}
                                title="image_ferme"
                            />
                            <CardContent>
                                <Typography component="p">
                                    {ferme.descriptif}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {
                                    ferme.info && (
                                    <Button size="small" color="primary" target="_blank" href={ferme.info} >
                                     Plus d'info
                                    </Button>
                                    )
                                }

                            </CardActions>
                        </Card>
                    </Grid>
                     )}
                </Grid>
            </div>
           
        )
    }
}




