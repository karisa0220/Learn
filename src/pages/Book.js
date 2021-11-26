import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardBig from "../component/CardBig";
import Plaintext from "../component/PlainText";
import { NavLink } from 'react-router-dom';
//import { useHistory } from "react-router-dom";
import "./Book.css";


// export default function Book(props) {
export default function Book(props) {
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const topics = ["Education", "Money", "Success"];
  const { history } = props
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
        try {
            const response = await axios.get(
            "https://bookshelves.p.rapidapi.com/books",
            {
                headers: {
                "x-rapidapi-host": "bookshelves.p.rapidapi.com",
                "x-rapidapi-key": "a83c592060mshec17e2c47baba8ap16b49fjsn544bacaf9a6b",
                },
            }
        );
        if (response.status === 200) {
            setData(response.data);
            setisLoaded(true);
            setIsLoading(false);
            localStorage.setItem("users", JSON.stringify(response.data))

            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            let collection=localStorage.getItem("users");
            setData(JSON.parse(collection))
        }
    };
    if (!isLoaded) {
        fetchData();
    }
  }, [isLoaded]);


  return (
    <main>
      <div className="card" >
        <p id="title">Search Book</p>
        <div className="description">
          <div>
          <button  onClick={() => history.push("/book/search")}>Search</button>
          </div>

        </div>
      </div>
      <p id="books">BEST SELLER</p>
      {!data || isLoading ? (
                <p id="text">Loading...</p>
            ) : (
      <div className="containerTop">
          {data.Books.map((item, index) => {
            return (
            <div key={index} className="card">
              <Fragment>
                <NavLink 
                  to={`/book/${index}`}
                  onClick={() => history.push({pathname:`/book/${index}`, data: index})}
                  style={{color: 'black',  textDecoration: 'none', size: 15 }}
                >
                  <h4 style={{ paddingLeft: 0}}>
                  <CardBig 
                    data={item} 
                  />
                  </h4>
             
                </NavLink>
              </Fragment>

            </div>  
            )
         })}
      </div>    
         
         )}   
      <p id="books">TOPICS</p>
        <Fragment >
        <NavLink 
                  to={`/topic/topic1`}
                  style={{color: 'black',  textDecoration: 'none', size: 15 }}
                >
                  <h4 style={{ paddingLeft: 0}}>
                      <Plaintext
                        data={topics[0]} 
                      />
                  </h4>     
                </NavLink>
          <hr></hr>
          {/* <NavLink 
                  to={`/topic/topic2`}
                  style={{color: 'black',  textDecoration: 'none', size: 15 }}
                >
                  <h4 style={{ paddingLeft: 0}}>
                      <Plaintext
                        data={topics[1]} 
                      />
                  </h4>     
                </NavLink>
          <hr></hr> */}
          <NavLink 
                  to={`/topic/topic2`}
                  style={{color: 'black',  textDecoration: 'none', size: 15 }}
                >
                  <h4 style={{ paddingLeft: 0}}>
                      <Plaintext
                        data={topics[2]} 
                      />
                  </h4>     
                </NavLink>
          <hr></hr>
          <br></br><br></br><br></br><br></br><br></br><br></br>
        </Fragment>

    
    </main>
  )
}
