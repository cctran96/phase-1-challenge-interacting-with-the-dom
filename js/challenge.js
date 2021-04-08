function timer() {
    a = document.querySelector('#counter')
    b = parseInt(a.innerHTML)
    interval = setInterval(function(){
        a.innerHTML = b
        b++
    }, 1000)
    return interval
}

function buttons() {
    var minus = document.querySelector('#minus')
    minus.addEventListener('click', function() {
        a.innerHTML = b--
    })

    var plus = document.querySelector('#plus')
    plus.addEventListener('click', function() {
        a.innerHTML = b ++
    })
}

function heart() {
    var heart = document.querySelector('#heart')
    ul = document.querySelector('.likes')
    var obj = {}
    heart.addEventListener('click', function() {
        obj[a.innerHTML] = (obj[a.innerHTML] + 1) || 1
        if (obj[a.innerHTML] === 1){
            const li = document.createElement('li')
            li.setAttribute('id', a.innerHTML)
            li.textContent = `${a.innerHTML} has been liked 1 time.`
            ul.appendChild(li)
        } else if (obj[a.innerHTML] != 1){
            x = document.getElementById(a.innerHTML)
            x.textContent = `${a.innerHTML} has been liked ${obj[a.innerHTML]} times.`
        }
    })
}

function paused() {
    pause = document.querySelector('#pause')
    clearInterval(interval)
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
    pause.innerHTML = 'resume'
}

function resume() {
    timer()
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    pause.innerHTML = 'pause'
}

document.addEventListener('click', function(e) {
    var but = e.target.innerText
    if (but === "pause") {
        paused()
    } else if (but === "resume"){
        resume()
    }
})




function submit() {
    var list = document.querySelector('#list')
    var input = document.querySelector('#comment-input')
    var comment = document.querySelector('#comment-form')
    comment.addEventListener('submit', function(e) {
        e.preventDefault()
        var p = document.createElement("p");
        p.innerText = input.value;
        list.appendChild(p);
        e.target.reset()
    })
}

heart()
timer()
buttons()
submit()