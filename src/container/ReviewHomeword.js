import React,{Component} from 'react'
import NavTop from '../component/NavTop/NavTop';
import ReviewList from '../component/ReviewList/ReviewList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import reviewActions from '../actions/review'
import { Button } from '../../node_modules/antd';
import { Link } from 'react-router'
import '../App.css'


class ReviewHomework extends Component{
    componentDidMount(){
        const { reviewActions } = this.props;
        const isReviewed0 = 0;
        const isReviewed1 = 1;
        const token0 = 0;
        const token1 = 1;
        console.log("生命周期执行了===========================");
        reviewActions.fetchNotReviewList(token1,isReviewed0);
        reviewActions.fetchDoneReviewList(token1,isReviewed1);
        reviewActions.fetchAllNotReviewList(token0,isReviewed0);
        reviewActions.fetchAllDoneReviewList(token0,isReviewed1);
    }

    render(){
        const {notReviewList,
            doneReviewList,
            allNotReviewList,
            allDoneReviewList} = this.props;
            console.log({notReviewList,
                doneReviewList,
                allNotReviewList,
                allDoneReviewList})
        return(
            <div className="ReviewHomework">
                <NavTop />
                <ReviewList 
                    notReviewList={notReviewList}
                    doneReviewList={doneReviewList}
                    allNotReviewList={allNotReviewList}
                    allDoneReviewList={allDoneReviewList}
                />
                <Link to='studentsLib'><Button className="fanhui">跳转到学生列表</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
   const { review:{
            notReviewList,
            doneReviewList,
            allNotReviewList,
            allDoneReviewList
        } 
    } = state;
    
    console.log({
        notReviewList,
        doneReviewList,
        allNotReviewList,
        allDoneReviewList
    } )
   return {notReviewList,
    doneReviewList,
    allNotReviewList,
    allDoneReviewList}
}

const mapDispatchToProps = dispatch =>{
    return{
        reviewActions:bindActionCreators(reviewActions, dispatch),
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewHomework)