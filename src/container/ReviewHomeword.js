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
    componentDidMoun(){
        const { reviewActions } = this.props;
        const isReviewed0 = 0;
        const isReviewed1 = 1;
        const token0 = 0;
        const token1 = 1;
        console.log("生命周期执行了===========================");
        reviewActions.fetchNotReviewList(isReviewed0);
        reviewActions.fetchDoneReviewList(isReviewed1);
        reviewActions.fetchAllNotReviewList(token0);
        reviewActions.fetchAllDoneReviewList(token1);

    }

    render(){

        return(
            <div>
                <NavTop />
                <ReviewList />
                <Link to='studentsLib'><Button className="fanhui">跳转到学生列表</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {
    notReview
    } = state;
    console.log(state)
    return {notReview}
    
}

const mapDispatchToProps = dispatch =>{
    return{
        reviewActions:bindActionCreators(reviewActions, dispatch),
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewHomework)