var student1={'stuid':101,'stuname':'vinoth','course':'java','fees':8000};
var student2={'stuid':202,'stuname':'madhan','course':'python','fees':7000};
var students=[student1,student2];
students.forEach((a)=>console.log(a));


var totalfees=0;
for(let i of students)
{
    var m=document.querySelector("#id3");
    totalfees=totalfees+i['fees'];
}  
console.log(totalfees);
var count=0; 
        document.onload=initialValue();
        function initialValue()
        {
            var m=document.querySelector("#id1");
            m.innerHTML=count;
        }
        function addCart()
        {
            var m=document.querySelector("#id1");
            count=count+1;
            m.innerHTML=count;
        }
        function removeCart()
        {
            var m=document.querySelector("#id1");
            count=count-1;
            m.innerHTML=count;
        }
        function cartitem()
        {
            var n=document.getElementById("itemcount");
            n.innerHTML=count;
        }