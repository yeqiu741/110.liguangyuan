import React,{Component} from 'react'
import './NotReview.css'
import NotReviewList from '../NotReviewList/NotReviewList';



export default class NotReview extends Component{

    renderNotReviewList = (data) =>{
       const rnrl = (data||[]).map((item ,idx)=>{
           return <NotReviewList key={idx} item={item} />
       });
       return rnrl; 
    }
    
 
    render(){
        const {notReviewList} = this.props;
        const data = notReviewList.data;
        return(
            <ul >
                {this.renderNotReviewList(data)}
            </ul>
        )
        
    }
}