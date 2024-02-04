function ferhenheit(){
    var f=document.getElementById('imo').value;
    var b=(f-32)*(5/9);
    document.getElementById('text').innerHTML="ferhenheit to celcius :" + b;}

    function celcius(){
        var a = document.getElementById('imo').value;
        var c = (a * 9/5) + 32 ;
        document.getElementById('text').innerHTML="celcius to ferhenheit:" + c;
    }