import React from 'react';
import { MovieItem } from './movieItem';
export class Movies extends React.Component{

    render() {
        return this.props.mymovies.map(
            (movie)=>{
                return  <MovieItem mymovie={movie} ReloadData={this.props.ReloadData}></MovieItem>

            }

        );

     }


}