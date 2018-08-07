import React,{Component} from 'react'
import './NotReview.css'
import NotReviewList from '../NotReviewList/NotReviewList';


export default class NotReview extends Component{

    render(){
        return(
            <ul>
                <NotReviewList />
            </ul>
        )
        
    }
}