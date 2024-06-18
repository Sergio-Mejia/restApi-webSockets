const lblPending = document.querySelector("#lbl-pending");

async function loadInitialCount() {
  const pendingTickets = await fetch("/api/ticket/pending")
    .then((resp) => resp.json())
    .catch((err) => console.log(err));

  lblPending.innerText = pendingTickets.length || 0;
}

function connectToWebSockets() {
  const socket = new WebSocket("ws://localhost:3000/ws");

  socket.onmessage = (event) => {
    // console.log(event.data); //* on-ticket-count-change
    const { payload, type } = JSON.parse(event.data);
    if (type !== "on-ticket-count-change") return;
    
    lblPending.innerText = payload;
  };

  socket.onclose = (event) => {
    console.log("Connection closed");
    setTimeout(() => {
      console.log("retrying to connect");
      connectToWebSockets();
    }, 1500);
  };

  socket.onopen = (event) => {
    console.log("Connected");
  };
}

loadInitialCount();
connectToWebSockets();
