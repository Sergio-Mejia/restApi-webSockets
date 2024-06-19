console.log("Público HTML");

const numberTicketLbl = document.querySelector("#lbl-ticket-01");
const deskLbl = document.querySelector("#lbl-desk-01");

function renderTickets(tickets = []) {
  for (let i = 0; i < tickets.length; i++) {
    if (i >= 4) break;

    const numberTicketLbl = document.querySelector(`#lbl-ticket-0${i + 1}`);
    const deskLbl = document.querySelector(`#lbl-desk-0${i + 1}`);

    numberTicketLbl.innerText = tickets.at(i).number;
    deskLbl.innerText = tickets.at(i).handleAtDesk;
  }
}

async function workingOn() {
  const tickets = await fetch("/api/ticket/working-on").then((resp) =>
    resp.json()
  );
  console.log(tickets);
  renderTickets(tickets);
}

workingOn();
