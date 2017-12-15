import React from 'react';
import './history.css';

export default function History (props) {
    return (
        <div className="history">
            <ul classname="history-items">
                <li className="history-list">Question History:</li>
                <li className="history-list">{this.props.questionHistory.map((res) => {return <span>{res}</span>)}: {this.props.answerHistory.map((res) => {return <span>{res}</span>})}</li>
            </ul>
        </div>
    )
}