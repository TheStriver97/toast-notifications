let toastBox= document.getElementById('toastBox')
let successMsg = '<i class="fa-solid fa-check"></i> Successfully submitted'
let ErrorMsg = '<i class="fa-solid fa-xmark"></i> Fix the error'
let InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input'


function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast)

    if (msg.includes('error')){
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')){
        toast.classList.add('Invalid');
    }
    
    setTimeout(()=>{
        toast.remove()
    },5000)
}

