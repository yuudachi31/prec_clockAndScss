// alert("ssas")
let Json = "json/data.json"
let clockHour = document.querySelector(".hand-hour");
let clockMinute = document.querySelector(".hand-minute");
let clockSecond = document.querySelector(".hand-second");
let node=null
//IIFE練習
$(document).ready(function () {
    $.get(Json, function(data) {
        
            setURL(data)
        });
})

function setURL(data){
    data.webs.map((eachdata,typeIndex)=>{
        node = $('#Template01').html();
        let content = node.replace('WEBTITLE', eachdata.webTitle);
       content = content.replace('WEBURL',eachdata.webURL)
        console.log(content)

        $('.container').append(content)
        // eachAppType.appList.map((eachApp)=>{
        //     node2 = $('#Template02').html();
        //     let content = node2.replace('APP', eachApp);
        //     $('.app-each-list-'+typeIndex).append(content)
        
        // })
    })

// console.log(data);

}