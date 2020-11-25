import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component{

    constructor(){
      super();

      this.DeleteMovie = this.DeleteMovie.bind(this);

    }

    DeleteMovie(e){
      e.preventDefault();
      console.log("Delete: "+this.props.mymovie._id);

      axios.delete("http://localhost:4000/api/movies"+this.props.mymovie._id)
      .then(()=>{
        this.props.ReloadData();
      })
      .catch();

    }

render(){
    return(
        <div>
           

            <Card>
  <Card.Header>{this.props.mymovie.title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.mymovie.poster} width="200"></img>
      
      <footer className="blockquote-footer">
      {this.props.mymovie.year}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant ="danger" onClick={this.DeleteMovie}>Delete</Button>
</Card>

        </div>

    );


}

}