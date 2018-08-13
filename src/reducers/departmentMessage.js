// import * as actions from '../const/ActionType'

    const init_state={
            allDepartmentInfp:[
                {
                    name:'白帆',
                    mid:'267511969',
                    isDailog:false
                },
                {
                    name:'黑帆',
                    mid:'267533969',
                    isDailog:false
                }
                
            ],
            guangzhou:[
                {
                    name:'红帆',
                    mid:'267011969',
                    isDailog:false
                },
                {
                    name:'紫帆',
                    mid:'207533969',
                    isDailog:false
                }
            ],
            chanpin:[
                {
                    name:'橙帆',
                    mid:'267011969',
                    isDailog:false
                },
                {
                    name:'红帆',
                    mid:'207533969',
                    isDailog:false
                }
            ],
            kaifaFirst:[
                {
                    name:'黄帆',
                    mid:'267001969',
                    isDailog:false
                },
                {
                    name:'绿帆',
                    mid:'207000969',
                    isDailog:false
                }
            ],
            kaifaSecond:[
                {
                    name:'蓝帆',
                    mid:'267001969',
                    isDailog:false
                },
                {
                    name:'靛帆',
                    mid:'207000969',
                    isDailog:false
                }
            ]
        
        
    }

function departmentMessage(state=init_state, action) {
      return state
}

export default departmentMessage