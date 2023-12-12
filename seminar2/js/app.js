get();
    
setInterval(get, 2000);
    
function send() {
    let name = document.getElementById("name").value
    let message = document.getElementById("message").value
    
    if (message == "") {
        document.getElementById("error").innerText = 'Error. Enter your message.'
        return
    }
    
    if (name == "") {
        name = "Guest"
    }
    
    (async () => {
    const response = await fetch('chat.php',
    {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `message=${name}: ${message}`
        }
        );
    
    const answer = await response.json();
    if (answer.status === "ok") 
        document.getElementById('message').value = "";
    if (answer.status === "error") 
        document.getElementById('message').value = answer.error;
    }
    )();
}

function get() {
    (async () => {
        const response = await fetch('chat.php');
        const answer = await response.json();
        let str = '';
        for (i in answer.messages) {
            str = str + 
            `<div class="d-flex flex-row justify-content-start">
                <div>
                  <p class="small p-2 ms-3 mb-3 rounded-3" style="background-color: #f5f6f7;">
                    ${answer.messages[i].message}
                  </p>
                </div>
             </div>`;
                }
        document.getElementById('chat').innerHTML = str
    }
    )();
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    send();
  }
}