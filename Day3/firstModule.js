class flightTickets {
  Tickets = [];
  table = [];
  AddItem(seat, flight, Date) {
    const id = this.Tickets.length + 1;
    this.Tickets.push({
      seat,
      id,
      flight,
      Date,
    });
    console.log(this.Tickets);
  }

  display = () => {
    for (let i = 0; i < this.Tickets.length; i++) {
      console.log(
        `Seat number : ${this.Tickets[i].seat} ,id number : ${this.Tickets[i].id} ,flight : ${this.Tickets[i].flight} ,travelling Date : ${this.Tickets[i].Date}`
      );
    }
  };

  getTickets = (id) => {
    for (let i = 0; i < this.Tickets.length; i++) {
      if (this.Tickets[i].id == id) {
        console.log(
          `Seat number : ${this.Tickets[i].seat} ,id number : ${this.Tickets[i].id} ,flight : ${this.Tickets[i].flight} ,travelling Date : ${this.Tickets[i].Date}`
        );
      } else {
        console.log("not found");
      }
    }
  };

  updateTickets = (seat, id, flight, Date) => {
    for (let i = 0; i < this.Tickets.length; i++) {
      if (this.Tickets[i].id == id) {
        this.Tickets[i].seat = seat;
        this.Tickets[i].id = id;
        this.Tickets[i].flight = flight;
        this.Tickets[i].Date = Date;
        console.log("Updated successfully");
      }
    }
  };
}

module.exports = {
  flightTickets,
};
