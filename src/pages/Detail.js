import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";
import { useParams } from 'react-router'
import Content from "../component/Content";
import "./Detail.css";

export default function Detail() {
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  
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
            localStorage.setItem("users1", JSON.stringify(response.data))

            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            let collection=localStorage.getItem("users1");
            setData(JSON.parse(collection))
        }
    };
    if (!isLoaded) {
        fetchData();
    }
  }, [isLoaded, id]);

 // const { selected } = bookId

  
  return ( 
    <main>
      <p id="title">Overview</p>
      {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
        <div className="containerTop">
                <Fragment>
                  <Content 
                    data={data.Books[id]} 
                  />
                </Fragment>
            
        )
        </div>
      )}
    </main>
  );
}
