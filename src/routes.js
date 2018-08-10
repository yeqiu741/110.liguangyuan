import UserCenter from './container/UserCenter';
import StudentsLib from './container/StudentsLib';
import ClassDetail from './container/ClassDetail';
import AppWrapper from './container/AppWrapper';
import ReviewHomework from './container/ReviewHomeword';

//今天的作业。做了的都写在下面的路由里了
// import ActionSheet from './container/ActionSheetAll';
// import DailogAll from './container/DailogAll';
// import ProgressAll from './container/ProgressAll';
// import Switch1 from './component/components/Switch/Switch1'
// import SliderAll from './container/SliderAll';
// import ButtonGroup from './component/ButtonGroup/ButtonGroup';



const routeConfig = { 
  path: '/',
  component: AppWrapper,
  indexRoute: { component: ReviewHomework},
  childRoutes: [
    { path: 'studentsLib', component: StudentsLib },
    { path: 'userCenter/:mid', component: UserCenter },
    { path: 'classDetail/:classId', component: ClassDetail },
     {path: 'reviewHomeword' ,component:ReviewHomework} ,
    // {path: 'dailogall' ,component:DailogAll},
    // {path: 'progressall' ,component:ProgressAll},
    // {path: 'switch1' ,component:Switch1},
    // {path: 'actionsheet' ,component:ActionSheet},
    // {path: 'buttongroup' ,component:ButtonGroup}
  ]
}


export default routeConfig
