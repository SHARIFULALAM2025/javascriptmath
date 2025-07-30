let math = 90;
let english = 50;
let bangla = 40;
let science = 58;
let biology = 62;
if (
    (math >= 0 && math <= 100)        &&
    (english >= 0 && english <= 100)  &&
    (bangla >= 0 && bangla <= 100)    &&
    (science >= 0 && science <= 100)  &&
    (biology >= 0 && biology <= 100)
) {
    let total = math + english + bangla + science + biology;
    let avg = total / 5;
   if (math <33 || english <33 || bangla <33 || science < 33 || biology<33) {
       console.log('you fail');
   } else if (avg >= 80 && math >= 60 && english >= 60 && bangla >= 60 && science >= 60 && biology >= 60){
    console.log('you have got :A+');
   } else if (avg >= 60 && math >= 50 && english >= 50 && bangla >= 50 && science >= 50 && biology >= 50) {
       console.log('you have got : A');
   } else if (avg >= 40 && math >= 40 && english >= 40 && bangla >= 40 && science >= 40 && biology >= 40) {
       console.log('you have got :B');
   } else if (avg >= 33 && math >= 33 && english >= 33 && bangla >= 33 && science >= 33 && biology >= 33)
    console.log('you have got : Passed');
} else {
    console.log('your mark is invalid');
    
}