
$(()=>{
   const os = require('os')
   let datasets = []
   // 返回一个对象数组, 包含每个逻辑 CPU 内核的信息.
   const cpus = os.cpus()
   
const formatHour = (milliseconds)=>{
   let seconds = milliseconds/1000
   let hour = seconds / 60 /60
   return hour.toFixed(2)
}
const renderData = () => {
    let datasets = []
   for(let i=0; i < cpus.length; i++){
     const cpu = cpus[i]
     
     const cpuData = {
         data: [
            formatHour(cpu.times.user), //  CPU花费在用户模式下的毫秒时间数
            formatHour(cpu.times.sys), // CPU花费在系统模式下的毫秒时间数.
            formatHour(cpu.times.idle), // CPU花费在空闲模式下的毫秒时间数.
            formatHour(cpu.times.nice), // cpu 花费在良好模式下的毫秒时间 
            formatHour(cpu.times.irq)  // cpu 花费在中断请求模式下毫秒时间
         ],
         backgroundColor: [
             'rgba(255, 99, 132, 1)',
             'rgba(54, 162, 325, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(54, 325, 162, 1)',
             'rgba(255, 86, 206, 1)'
         ]
     }
     datasets.push(cpuData)
    
   }
   return datasets
}
   datasets = renderData()
   const initChart = ()=>{
        var chart = new Chart($('.chart'),{
            type: 'doughnut',
            data: {
                labels: [
                '用户模式时间 H',
                '系统模式时间 H',
                '空闲模式时间 H',
                '良好模式时间 H',
                '中断模式时间 H'
            ],
            datasets: datasets
        },
        options: {
            title:{
                display: true,
                text:'CPU 活动时间',
                fontColor: 'rgb(250, 250, 250)',
                fontSize:12
            }
        }
        })
        return chart
   }
   
   initChart()
   setInterval(function(){
    initChart()
   }, 10000)
})