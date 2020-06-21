// @ts-ignore
let searchbar = document.getElementById('input');
searchbar.focus();
console.log("working")
var temp = "";

function displayQuestion(questions) {
    var html = "";

    questions.forEach(question => {
        // html += `<h1>${question.title}</h1>`;   
        html += `<div class="card mt-2">
      <div class="card-header">
        ${question.title}
      </div>
      <div class="card-body">
    <h5 class="card-title"><span class="badge badge-pill badge-warning">${question.view_count}</span>
          view count
        </h5>

        <h5 class="card-title"><span class="badge badge-pill badge-danger">${question.answer_count}</span>
          answer count
        </h5>

    <h5 class="card-title"><span class="badge badge-pill badge-info">${question.score}</span>
          score
        </h5>
        <button href="#" onClick="selectedQuestionRender(${question.question_id})" id="show-answers-${question.question_id}"  class="btn btn-secondary">Go somewhere</button>
      </div>
    </div>`;

    });
    // console.log(html)
    return html;
}


async function search() {
    if (!searchbar.value) {
        if (searchbar.placeholder !== 'search stackoverflow here') {
            searchbar.value = searchbar.placeholder;
        } else {
            searchbar.value = '';
        }
    }

    // @ts-ignore
    document.getElementById("answers").innerHtml = "";
    // @ts-ignore
    let searchQuery = document.getElementById("input").value;
    // @ts-ignore
    searchvalue = searchQuery.replace(/\s/g, "+");

    // console.log(searchvalue);
    // @ts-ignore
    let data = await fetch('https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=' + searchQuery + '&answers=1&site=stackoverflow&filter=withbody')
    let questions = (await data.json()).items;
    // console.log(questions);

    // @ts-ignore
    document.getElementById("answers").innerHTML = await displayQuestion(questions);
}








function displayAnswers(params) {
    var html = "";

    if (!params.length) {
        html = `<div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>`;
    }
    else {
        params.forEach(ans => {
            html += `<div class="card mt-4 p-3 shadow rounded" id="${ans.answer_id}">${ans.body}</div>`;
        });
    }
    return html;
}


function copy( e){
    // @ts-ignore
    var h=document.getElementById(e);
    console.log(h.innerHTML);
}

async function selectedQuestionRender(e) {
    // console.log(e);
    // @ts-ignore
    fetch(`https://api.stackexchange.com/2.2/questions/${e}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`).then(
        res => res.json()).then(data => {
            console.log(data.items)
            // @ts-ignore
            temp = document.getElementById("answers").innerHTML;
            // @ts-ignore
            document.getElementById("answers").innerHTML = "";
            // @ts-ignore
            document.getElementById("answers").innerHTML = displayAnswers(data.items);
        }).then(renderCopyButtons);
}


function back() {
    // @ts-ignore
    document.getElementById("answers").innerHTML = temp;
}


// For copy buttons //

function renderCopyButtons(){
    // @ts-ignore
    document.querySelectorAll('pre > code').forEach(code => {
        code.innerHTML += '<button class="content-tocopy btn" onclick="copyToClipboard(this.parentElement.innerHTML.slice(0, this.parentElement.innerHTML.indexOf(\'content-tocopy\') - 15))">Copy</button>'
    })
    console.log("done");
}

const copyToClipboard = str => {
    console.log(str);
    // @ts-ignore
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    // @ts-ignore
    document.body.appendChild(el);
    el.select();
    // @ts-ignore
    document.execCommand('copy');
    // @ts-ignore
    document.body.removeChild(el);
};


// @ts-ignore
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        // @ts-ignore
        search(e);
    }
}, false);


// @ts-ignore
document.querySelector("button").addEventListener("click", search);

