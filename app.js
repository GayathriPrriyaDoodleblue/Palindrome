function isPalindrome() {
    var getValue = document.getElementById("text").value;
    var store=getValue.replace(/[^[a-zA-Z0-9]+/g, "").replace(/\s+/g, "").toUpperCase();
    let reverse = store.split('').reverse().join('');
    if(store == reverse){
        document.getElementById("show").innerHTML="After removing spaces,spl chars,commas "+store;
        document.getElementById("result").innerHTML="It is a palindrome";

    }
    else{
        document.getElementById("result").innerHTML="It is not a palindrome";
    }
  }
  
  