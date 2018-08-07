import React,{Component} from 'react'
import './NotReviewList.css'
import ReviewBox from '../ReviewBox/ReviewBox';


export default class NotReviewList extends Component{

    render(){

        return(
            <li>
                <ReviewBox />
            </li>
        )
    }
}