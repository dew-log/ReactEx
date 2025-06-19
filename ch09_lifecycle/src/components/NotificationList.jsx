import React, {Component} from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요. 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

class NotificationList extends Component{
    constructor(props){
        super(props);

        this.timer = null;

        this.state = {
            notifications: [],
        };
    }

    componentDidMount(){
        const { notifications } = this.state;

        this.timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications:notifications,
                });
            }else{
                this.setState({
                    notifications: [],
                });
                clearInterval(this.timer);
                this.timer = null;
            }
        }, 1000);
    }

    componentWillUnmount(){
        if(this.timer) clearInterval(this.timer);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return(
                        <Notification key={notification.id} id={notification.id} message={notification.message} />
                    )
                })}
            </div>
        )
    }
}

export default NotificationList;