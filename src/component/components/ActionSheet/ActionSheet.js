import React,{Component} from 'react';
import './ActionSheet.css';

export default class ActionSheet extends Component {

    static defaultProps={
        isActive:false,
        title:'',
        menu:[],
        type:'',
        onCancel:()=>{},
    }

    getMaskClassName = ()=>{
        if(!this.props.isActive){
            return 'mask hideMask'
        }else{
            return 'mask showMask'
        }
    }

    getMenuClassName =()=>{
        if(!this.props.isActive){
            return 'menu'
        }else{
            return 'menu showMenu'
        }
    }

    getAndMenuClassName =()=>{
        if(!this.props.isActive){
            return 'Andmenu'
        }else{
            return 'Andmenu showMenu'
        }
    }

    handleMenuItemClick=idx=>{
        const { menu, onCancel } = this.props;
        menu[idx].click && menu[idx].click(idx);
        onCancel();
    }

    render(){
        const {title,menu} = this.props;
        console.log(this.props.type);
        return(
            <div className="actionsheetCtn">
            <div className={this.getMaskClassName()} onClick={this.props.onCancel}/>

            {
                this.props.type=='iOS'?
                (
                    <div className={this.getAndMenuClassName()}>
                        {
                            !title.length?null:<div className="title divider">{title}</div>
                        }
                        {
                            menu.map((item, idx) => (
                                <div
                                    className="btn divider"
                                    key={`actionSheet_${idx}`}
                                    onClick={() => this.handleMenuItemClick(idx)} >
                                    {item.title}
                                </div>
                                )
                            )
                        }
                            <div className="btn cancel" onClick={this.props.onCancel}>取消</div>
                    </div>
                )
                :
                (
                    <div className={this.getMenuClassName()}>
                        {
                            !title.length?null:<div className="title divider">{title}</div>
                        }
                    
                        {
                            menu.map((item, idx) => (
                            <div
                                className="btn divider"
                                key={`actionSheet_${idx}`}
                                onClick={() => this.handleMenuItemClick(idx)} >
                                {item.title}
                            </div>
                            ))
                        }
                            <div className="btn cancel" onClick={this.props.onCancel}>取消</div>
                    </div>
                )
            }
            </div>
        );
    }
}
