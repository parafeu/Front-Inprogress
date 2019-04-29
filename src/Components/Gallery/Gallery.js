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
 
        const childElements = this.props.data.photo.map(tile=>(
            <div className="photo">
                <GridListTile key={tile.id} cols={tile.cols || 1 } >
                   <img src={tile.img} alt={tile.title} />
                </GridListTile>
            </div> 
        ))

       return(
            
            <Masonry
                className={'container'} 
                elementType={'div'} 
                options={masonryOptions} 
                disableImagesLoaded={false} 
                updateOnEachImageLoad={false} 
                imagesLoadedOptions={imagesLoadedOptions} 
            >

               <GridList cellHeight={160} className="photo-container" cols={3}>
                    {childElements}
               </GridList>

            </Masonry>
        
            
        )
    }
}