exports.convertTime=(timestamp)=>{
    let hour = (timestamp - timestamp % 3600000) / 3600000; // 60 * 60 * 1000
    let minute = Math.round((timestamp - hour * 60 * 60 * 1000) / (1000 * 60));
    if(hour==0){
        return minute+ " phút";
    }else{
        return hour+" giờ"
    }
  }