import React,{Component} from 'react'
import NotReviewList from '../NotReviewList/NotReviewList';



export default class NotReview extends Component{

    renderDoneReviewList = (data) =>{
       const rnrl = (data||[]).map((item ,idx)=>{
           return <NotReviewList key={idx} item={item} />
       });
       return rnrl; 
    }
    
 
    render(){
        const {doneReviewList} = this.props;
        const data = doneReviewList.data;
        return(
            <ul >
                {this.renderDoneReviewList(data)}
            </ul>
        )
        
    }
}