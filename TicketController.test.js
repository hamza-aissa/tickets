const {
  AddTicket,
  DeleteTicket,
  Up,
  Down,
} = require("./Controllers/TicketController");
describe("TicketController", () => {
  let req, res;
  beforeEach(() => {
    req = { body: {} };
    res = {
      send: jest.fn(),
    };
  });

  test("AddTicket adds a new ticket", () => {
    req.body.description = "Test ticket";
    AddTicket(req, res);
    expect(res.send).toHaveBeenCalledWith(
      expect.stringContaining("ticket has been added")
    );
  });

  test("DeleteTicket deletes an existing ticket", () => {
    AddTicket(req, res);
    DeleteTicket(req, res);
    expect(res.send).toHaveBeenCalledWith(
      expect.stringContaining("The existing ticket has been deleted")
    );
  });

  test("Up increases the attribute of an existing ticket", () => {
    AddTicket(req, res);
    Up(req, res);
    expect(res.send).toHaveBeenCalledWith(
      expect.stringContaining("has been increased ")
    );
  });

  test("Down decreases the attribute of an existing ticket", () => {
    AddTicket(req, res);
    Up(req, res);
    Down(req, res);
    expect(res.send).toHaveBeenCalledWith(
      expect.stringContaining("has been decreased")
    );
  });
});
