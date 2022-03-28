mytime()
function mytime(){
    var time = document.getElementById('txt')
    var a = new Date(); 
    var b = a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
    var c = a.getFullYear()+'-'+a.getMonth()+'-'+a.getDay();
    time.firstChild.nodeValue=b+" "+c+"  "+b+" "+c+" "+b+" "+c+" "+b+" "+c+" "+b+" "+c+" "+b+" "+c+" "+b+" "+c+" "+b+" "+c+" "+b+" "+c+" "+b+" "+c; 
}