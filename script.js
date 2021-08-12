function addMore() {
    document.getElementById('error').innerHTML="";
    
    let name=document.getElementById('name').value;
    if(name=='') {
        document.getElementById('error').innerHTML="*Please enter a value";
    }else {
        let box=document.getElementById('box');

        let li=document.createElement('li');
        li.textContent=name

        let a=document.createElement('button');
        a.textContent="Remove";
        a.href="javascript:void(0)";
        a.className="remove-btn";
        li.appendChild(a);

        box.appendChild(li);

    }
    document.getElementById('name').value=""; 
}


let btn=document.querySelector('ul');
btn.addEventListener('click', function(e) {
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
}); 




































// function addMore() {
//     document.getElementById('error').innerHTML="";
   
//     let name=document.getElementById('name').value;
//     if(name=='')
//     {
//         document.getElementById('error').innerHTML="Please enter any value";   
//     } else{ 
//         let box=document.getElementById('box');

//         let li=document.createElement('li');
//         li.textContent=name;

//         let a=document.createElement('a')

//         let pos=box.firstElementChild;
//         if(pos==null){
//             box.appendChild(li);
//         }else{
//             box.insertBefore(li, box);
//         }


      
//     }
// }