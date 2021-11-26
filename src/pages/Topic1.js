import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from 'react-router'
// Components
import CardSmall from "../component/CardSmall";
import Modal from "../component/Modal";
import  "./Book";


export default function Topic() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    


    const [query] = useState("Education");

    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;



    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://www.googleapis.com/books/v1/volumes?q=subject:" + query
                    , {
                        params: { limit: 300 },
                      }            );
            if (response.status === 200) {
                setData(response.data);
                setisLoaded(true);
                setIsLoading(false);
                localStorage.setItem("users3", JSON.stringify(response.data))

                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                let collection=localStorage.getItem("users3");
                setData(JSON.parse(collection))
            }
        };
        if (!isLoaded) {
            fetchData(query);
        }
    }, [isLoaded, query]);


    const handleClick = (item) => {
        setModalShow(!modalShow);
        setModalItem(item);
    };



    return (
        <main>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
            <div className="card-container">
                {data.items.map((aBook) => {
                    return (
                        <CardSmall 
                            data={aBook}                    
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            onClick={() => handleClick()}

                        />
                    );
                })}       
            </div>
            )}
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />

        </main>
    );
}