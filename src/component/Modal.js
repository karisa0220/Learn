
import React from "react";
import "./Modal.css";
export default function index({ isShow, data, onCancel }) {
    return (
        <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
            <div className="modal-bg" onClick={onCancel}></div>
            <div className="modal">
                {data && <img src={data.volumeInfo.imageLinks.thumbnail} alt="sesuatu"
        />}
            </div>
        </div>
    );
}