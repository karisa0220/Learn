import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import Card from "../component/CardSmall";
import Modal from "../component/Modal";

export default function Search() {
    console.log("aku masuk kok ke search");
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("badass");
    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    useEffect(() => {
        const fetchData = async (query) => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyBOwI_lozMZf7lPe952bWFunn9v1H3d_b0"
                    , {
                        params: { limit: 300 },
                      }            );
            if (response.status === 200) {
                setData(response.data);
                setisLoaded(true);
                setIsLoading(false);
                localStorage.setItem("users2", JSON.stringify(response.data))

                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                let collection=localStorage.getItem("users2");
                setData(JSON.parse(collection))
            }
        };
        if (!isLoaded) {
            fetchData(query);
        }
    }, [isLoaded, query]);

    const onSearch = (e) => {
        if (e.key === "Enter") {
            setisLoaded(false);
            setQuery(e.target.value);
        }
    };

    const handleClick = (item) => {
        setModalShow(!modalShow);
        setModalItem(item);
    };

    return (
        <main>
            <input
                type="text"
                placeholder="Search anything about books"
                onKeyDown={(e) => onSearch(e)}
            />
            <h3 className="titleGroup">Search : {query}</h3>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
            <div className="card-container">
                {data.items.map((books) => {
                    return (
                        <Card data={books} onClick={() => handleClick(books)} />
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