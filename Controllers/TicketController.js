// const { json } = require("body-parser");

let ticket = [];

const AddTicket = (req, res) => {
  const { description } = req.body;
  if (ticket.length > 0) {
    res.send(
      `Ticket with description "${
        ticket[0].description
      }" already exists. Do you want to delete it? full ticket info:   ${JSON.stringify(
        ticket[0]
      )} `
    );
  } else {
    const newTicket = {
      id: new Date().toISOString(),
      description,
      attribute: 1,
    };
    ticket.push(newTicket);
    // res.send(
    //   `Ticket with description "${description}" has been added.  here is the new ticket:  ${JSON.stringify(
    //     ticket
    //   )}`
    // );
    res.send("ticket has been added");
  }
};

const DeleteTicket = (req, res) => {
  if (ticket.length > 0) {
    ticket.pop();
    res.send(`The existing ticket has been deleted.`);
  } else {
    res.send(`No ticket exists.`);
  }
};

const Up = (req, res) => {
  if (ticket.length > 0) {
    if (ticket[0].attribute < 10) {
      ticket[0].attribute += 1;
      // res.send(
      //   `Attribute of ticket "${JSON.stringify(
      //     ticket[0]
      //   )}" has been increased to ${ticket[0].attribute}.`
      // );
      res.send("has been increased ");
    } else {
      res.send(
        `Attribute of ticket  "${JSON.stringify(
          ticket[0]
        )}" is already at max value.`
      );
    }
  } else {
    res.send(`No ticket found ".`);
  }
};

const Down = (req, res) => {
  if (ticket.length > 0) {
    if (ticket[0].attribute > 1) {
      ticket[0].attribute -= 1;
      // res.send(
      //   `Attribute of ticket :"${JSON.stringify(
      //     ticket[0]
      //   )}" has been decreased to ${ticket[0].attribute}.`
      // );
      res.send("has been decreased ");
    } else {
      res.send(
        `Attribute of ticket  "${JSON.stringify(
          ticket[0]
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
