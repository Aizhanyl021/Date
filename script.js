let clock =() => {
    let date = new Date ()
   let month_num = date.getMonth()
   let day = date.getDate()
   let hours = date.getHours()
   let minutes = date .getMinutes()
   let seconds = date.getSeconds()

   if (day <= 9) day = "0" + day
if (hours <= 9) hours = "0" + hours
if (minutes <= 9) minutes = "0" + minutes
if (seconds <= 9) seconds = "0" + seconds

   

   let months = [
    "Januar",
    "februar",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "Septrmber",
    "October",
    "November",
    "Desember"
]
//console.log(months[month_num])

 //let date_time = "Heute" + " " + day +" " + hours
 let date_time = ` Heute ist ${day} - ${months[month_num]} ,    ${hours}:${minutes}:${seconds}`



 //getElementById - chygaruu
 //innerHTML - BRAUSERGE CHYGARUU

let element = document.getElementById("time")
element.innerHTML = date_time
//sekuddy sanooo
setTimeout('clock(), 1000')

}
clock()
