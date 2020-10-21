import React from 'react';
import { MovieItem } from './movieItem';
export class Movies extends React.Component{

    render() {
        return this.props.mymovies.map(
            (movie)=>{
                return  <MovieItem mymovie={movie}></MovieItem>

            }

        );
       // return(
        //     <div>
        //         <h3>This is the Movies Component</h3>
        //         {console.log(this.props.mymovies)}
        //         <MovieItem></MovieItem>
        //     </div>
        // );


     }


}