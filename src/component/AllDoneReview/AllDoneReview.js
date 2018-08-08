import React,{Component} from 'react'
import NotReviewList from '../NotReviewList/NotReviewList';



export default class NotReview extends Component{

    renderAllDoneReviewList = (data) =>{
       const rnrl = (data||[]).map((item ,idx)=>{
           return <NotReviewList key={idx} item={item} />
       });
       return rnrl; 
    }
    
 
    render(){
        const {allDoneReviewList} = this.props;
        const data = allDoneReviewList.data;
        return(
            <ul >
                {this.renderAllDoneReviewList(data)}
            </ul>
        )
        
    }
}