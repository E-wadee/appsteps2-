import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";


// LIFE CYCLE METHOD FROM A FUNCTION COMPONENT (BELOW) - useState is  used for this
const Home = () => {
  const [number, setNumber] = useState(0);
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("Avengers");

  const getPost = async () => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" +
          query +
          "&api-key=yourkey"
      );

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }



// FETCH IS USED BELOW (the newer and better way to do this is by using axios wich is in the example above. you have to install it: yarn add axios)
//     // fetch("http://jsonplaceholder.typicode.com/posts")
//     //   .then((response) => {
//     //     return response.json();
//     //   })
//     //   .then((data) => {
//     //     console.log(data);
//     //   });
  };
// END OF FETCH CODE


// DECIDE IF YOU ARE USING AXIOS OF FETCH
useEffect(() => {
    getPost();

    return () => {
      console.log("Home unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Home updated");
  }, [number]);

  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        );
      })}
      {/* <h1>{number}</h1>
      <Button onClick={() => setNumber(number + 1)}>Add one</Button> */}
    </>
  );
};



// // LIFE CYCLE METHOD FROM A CLASS COMPONENT (BELOW) - useState is not used for this
// class Home extends React.Component {
//   constructor() {
//     super();

//     this.state = { number: 0 };
//   }

//   componentDidMount() {
//     console.log("Home mounted");
//   }

//   componentDidUpdate() {
//     console.log("Home updated");
//   }

//   componentWillUnmount() {
//     console.log("Home unmounted");
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.number}</h1>
//         <Button
//           onClick={() => this.setState({ number: this.state.number + 1 })}
//         >
//           Add one
//         </Button>
//       </>
//     );
//   }
// }


export default Home;