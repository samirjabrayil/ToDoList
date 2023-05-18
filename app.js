let btn = document.querySelector('.btn');

btn.onclick = function () {
    let value = document.querySelector('#inp').value;
    let div = document.createElement('div');
    let btn_div = document.createElement('div');
    let h3 = document.createElement('h3');
    let button = document.createElement('button');
    let done = document.createElement('button')

    done.className = 'btn btn-success me-2  '
    button.className = 'btn btn-danger'
    h3.className = 'task'

    h3.innerHTML = value;
    button.innerHTML = 'Delete';
    done.innerHTML = 'Done'
    div.className = 'mx-auto m-4 form-control box d-flex justify-content-between'
    btn_div.className = 'all-btn justify-content-evenly w-auto'


    div.appendChild(h3);
    div.appendChild(btn_div);
    btn_div.appendChild(done)
    btn_div.appendChild(button)

    document.querySelector('.tasks').appendChild(div);
    CheckTask();

    done.addEventListener("click", (ev) => {
        ev.target.parentNode.parentNode.style.textDecoration = "line-through";
    })

    button.onclick = function() {
        let maindiv = document.querySelector('.tasks')
        maindiv.style.display = 'none'
    }

}




function CheckTask() {
    let count = document.querySelectorAll('.box').length;
    console.log(count);
    let alert = document.querySelector('.alert');
    document.querySelector('#number').innerHTML = count;
    if (count > 0) {
        alert.style.display = 'none'
    }
    else {
        alert.style.display = 'block'
    }
}

CheckTask();