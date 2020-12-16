// import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movies from "../components/Movies";
import "./Home.css";

// Food.propTypes={
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// }

// function Food({name,picture,rating}){
//   return <div>
//     <h1>I like {name}</h1>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt={name} />
//     </div>
// }

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image}/>
// }

// function Food2(props){
//   return <h1>I like {props.fav}</h1>
// }

// const foodILike = [
//   {
//     id:1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating:5
//   },
//   {
//     id:2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating:4.8
//   },
//   {
//     id:3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating:4.9
//   },
//   {
//     id:4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating:4.2
//   },
//   {
//     id:5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating:3.9
//   }
// ];

// function App() {
//   return (
//     <div className="App">
//       {foodILike.map(current=> <Food key={current.id} name={current.name} picture={current.image} rating={current.rating}/>)}
//       <br/>
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }


// class

class Home extends React.Component{
  state={
    isLoading:true,
    movies:[]
  };
  
  // type 1
  getMovies=async ()=>{
    const {
      data:{
        data:{movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
  }

  // type 2 비동기
  // async componentDidMount(){
  //   const movies=axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  // }
  render(){
    const {isLoading,movies}=this.state;
    return (
    <section className="container">
      { isLoading 
      ? <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
      :<div className="movies">
        {movies.map(movie=>
      <Movies
        key={movie.id}
        id={movie.id} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image} 
        year={movie.year}
        genres={movie.genres}/>
    )}
      </div>
      }</section>)
  }
}

// class App extends React.Component{
//   state={
//     count:0,
//   }
//   add=()=>{
//     this.setState({count:this.state.count+1}); // not to use like this
//   };
//   minus=()=>{
//     this.setState(current=>({count:current.count-1})); // you should use like this
//   };
//   render(){
//     return <div>
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//       </div>
//   }
// }

export default Home;
