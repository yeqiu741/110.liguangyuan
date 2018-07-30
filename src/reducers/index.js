import { ADD_MESSAGE } from '../const/ActionTypes.js';

const init_List={
    dataSource: [
        {
            key: '1',
            class: '高级班',
            classState: '进行中',
            classTime: '2017-04-20',
            teacher:'小白老师',
            studylv:'3/21',
            homeworkSubmit:'67.98%',
            dontKnow:'87.98%',
            biteCard:'3/21',
            goodNumber:'90.14%'
        }, 
        {
            key: '2',
            class: '进阶班',
            classState: '进行中',
            classTime: '2017-04-21',
            teacher:'小白老师',
            studylv:'5/21',
            homeworkSubmit:'76.89%',
            dontKnow:'31.87%',
            biteCard:'5/21',
            goodNumber:'98.14%'
        },
        {
            key: '3',
            class: '提高班',
            classState: '进行中',
            classTime: '2017-04-22',
            teacher:'小白老师',
            studylv:'13/21',
            homeworkSubmit:'13.89%',
            dontKnow:'21.76%',
            biteCard:'13/21',
            goodNumber:'88.01%'
        },
        {
            key: '4',
            class: '入门班',
            classState: '进行中',
            classTime: '2017-04-23',
            teacher:'小白老师',
            studylv:'20/21',
            homeworkSubmit:'98.45%',
            dontKnow:'98.67%',
            biteCard:'20/21',
            goodNumber:'30.10%'
        },
        {
            key: '5',
            class: '体验班',
            classState: '进行中',
            classTime: '2017-04-24',
            teacher:'小白老师',
            studylv:'21/21',
            homeworkSubmit:'31.54%',
            dontKnow:'78.76%',
            biteCard:'21/21',
            goodNumber:'94.10%'
        },
    ],
  
    columns : [
            {
                key: 'class',
                title: '班级',
                dataIndex: 'class',
            }, 
            {
                title: '课程状态',
                dataIndex: 'classState',
                key: 'classState',
            }, 
            {
                title: '开课时间',
                dataIndex: 'classTime',
                key: 'classTime',
            },
            {
                key: 'teacher',
                title: '老师',
                dataIndex: 'teacher',
            }, 
            {
                key: 'studylv',
                title: '上课率',
                dataIndex: 'studylv',
            }, 
            {
                key: 'homeworkSubmit',
                title: '作业提交率',
                dataIndex: 'homeworkSubmit',
            }, 
            {
                key: 'dontKnow',
                title: '被点评情况',
                dataIndex: 'dontKnow',
            }, 
            {
                key: 'biteCard',
                title: '打卡率',
                dataIndex: 'biteCard',
            }, 
            {
                key: 'goodNumber',
                title: '满意度',
                dataIndex: 'goodNumber',
            }
        ],
    dataSource1: [
            {
                key: '1',
                class: '高级班',
                classState: '已结束',
                classTime: '2017-04-20',
                teacher:'小白老师',
                studylv:'21/21',
                homeworkSubmit:'8/10',
                dontKnow:'10/10',
                biteCard:'5/21',
                goodNumber:'90.00%'
            }
            
        ],
      
    columns1: [
            {
                key: 'class',
                title: '班级',
                dataIndex: 'class',
            }, 
            {
                title: '课程状态',
                dataIndex: 'classState',
                key: 'classState',
            }, 
            {
                title: '开课时间',
                dataIndex: 'classTime',
                key: 'classTime',
            },
            {
                key: 'teacher',
                title: '老师',
                dataIndex: 'teacher',
            }, 
            {
                key: 'studylv',
                title: '上课率',
                dataIndex: 'studylv',
            }, 
            {
                key: 'homeworkSubmit',
                title: '作业提交率',
                dataIndex: 'homeworkSubmit',
            }, 
            {
                key: 'dontKnow',
                title: '被点评情况',
                dataIndex: 'dontKnow',
            }, 
            {
                key: 'biteCard',
                title: '打卡率',
                dataIndex: 'biteCard',
            }, 
            {
                key: 'goodNumber',
                title: '满意度',
                dataIndex: 'goodNumber',
            }
        ]
    }
export default function tabList(state = init_List,action ){
    return state;
}