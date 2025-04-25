import React, { Component } from 'react';

export default class Calendar extends Component {
    constructor(){
        super();


        this.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
             'Thursday', 'Friday', 'Saturday'];
        this.weekdays_jp = ['日曜日', '月曜日', '火曜日', '水曜日',
                '木曜日', '金曜日', '土曜日'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'];
        this.months_jp = ['1月', '2月', '3月', '4月', '5月', '6月',
            '7月', '8月', '9月', '10月', '11月', '12月'];
        this.state = {
            currentDay: new Date()
        }
    }
    render() {
        return (
            <div>
                <h1>Calendar Component</h1>
                <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
                <h2>{this.state.currentDay.getFullYear()} {this.months_jp[this.state.currentDay.getMonth()]}</h2>
            </div>
                
        )
    }
}