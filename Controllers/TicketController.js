const { json } = require("body-parser");

let ticket = null;

const AddTicket = async (req, res) => {
  const { description } = req.body;
  if (ticket) {
    res.send(
      `Ticket with description "${
        ticket.description
      }" already exists. Do you want to delete it? full ticket info:   ${JSON.stringify(
        ticket
      )} `
    );
  } else {
    const newTicket = {
      id: new Date(),
      description,
      attribute: 1,
    };
    ticket = newTicket;
    res.send(
      `Ticket with description "${description}" has been added.  here is the new ticket:  ${JSON.stringify(
        ticket
      )}`
    );
  }
};

const DeleteTicket = async (req, res) => {
  if (ticket) {
    ticket = null;
    res.send(`The existing ticket has been deleted.`);
  } else {
    res.send(`No ticket exists.`);
  }
};

const Up = async (req, res) => {
  if (ticket) {
    if (ticket.attribute < 10) {
      ticket.attribute += 1;
      res.send(
        `Attribute of ticket "${JSON.stringify(
          ticket
        )}" has been increased to ${ticket.attribute}.`
      );
    } else {
      res.send(
        `Attribute of ticket  "${JSON.stringify(
          ticket
        )}" is already at max value.`
      );
    }
  } else {
    res.send(`No ticket found ".`);
  }
};

const Down = async (req, res) => {
  if (ticket) {
    if (ticket.attribute > 1) {
      ticket.attribute -= 1;
      res.send(
        `Attribute of ticket :"${JSON.stringify(
          ticket
        )}" has been decreased to ${ticket.attribute}.`
      );
    } else {
      res.send(
        `Attribute of ticket  "${JSON.stringify(
          ticket
        )}" is already at min value.`
      );
    }
  } else {
    res.send(`No ticket found`);
  }
};

module.exports = {
  AddTicket,
  DeleteTicket,
  Up,
  Down,
};
