import React from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Masonry from 'react-masonry-component';

import './styleGallery.scss';



const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default class Gallery extends React.Component{
    render(){

        return(
            <div className="root">
            <Masonry
                className={''} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >

               <GridList cellHeight={160} className="photo-container" cols={3}>
                    {this.props.data.photo.map(tile=>(
                        <GridListTile key={tile.id} cols={tile.cols ||  1} >
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
               </GridList>

            </Masonry>
            
            </div>
        )
    }
}