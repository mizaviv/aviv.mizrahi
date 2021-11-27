let txt = "abcdefghigklmnopqrstuvwxyz";
let txt0=txt.length;
txt.length;
console.log(txt0);

let txt1="please visit Microsoft";
let txt2=txt1.replace("Microsoft","BGU");
console.log(txt2);

let txt3 = txt1.concat(" and ",txt2);
console.log(txt3);

 /*תמיד מבטא פקודות רק באותו בלוק כלומר עם סוגריים מסולסלים. מה ששונה לזה הוא הVAR שאיתו זה פקודה גלובלית על כל המסמך*/

function greet(){
    const d= new Date();
    var h = d.getHours();
    if(h<12)
    {
        let greeting = "Good Morning";
        console.log(greeting);
        document.getElementById("1").innerHTML=greeting;
    }else if(h<18){
let greeting2 = "Good Afretnoon";
console.log(greeting2);
document.getElementById("1").innerHTML=greeting2;
    }else{
        greeting3="Good evening";
        console.log(greeting3);
        document.getElementById("1").innerHTML=greeting3;
    }
}
let cars = ['toyota', 'Honda', 'mazda'];
console.log(cars);
text = "";
var i;
for(i=0; i<cars.length; i++){
    text += " " + cars[i] ;
console.log(text);
}

var imgs= [
    "images/linkedin.png",
    "images/Facebook.png",
    "images/Mail.png",
    "images/pug.png",
    "images/putin2.jfif"
];
var i =0;

/*document.getElementById("SMimg").src= "images/linkedin.png";*/

function StopMotion(){    
    setTimeout(() => {
        document.getElementById("SMimg").src= imgs[i];
        i++;
        if(i<imgs.length){
            StopMotion();/*תהליך ריקורסיה*/
        }
        else{
            i=0;
        }
    }, 250);

}

var person = {  firstName:"Aviv",
                lastName:"Mizrahi",
                id: 208611012,
                fullName : function(){return this.firstName+ " "+ this.lastName;}

};
console.log(person.fullName());