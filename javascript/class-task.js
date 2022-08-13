/* Create a TV class with properties like brand, channel and volume.
Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the 
TV will stay at the current channel.
Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75". */

class TV {
  constructor(brand) {
    this.brand = brand;
    this.volume = 50;
    this.channel = 1;
  }
  involume() {
    if (this.volume >= 0 && this.volume <= 100) {
      return (this.volume += 1);
    }
  }
  devolume() {
    if (this.volume < 100 && this.volume > 0) {
      return (this.volume -= 1);
    }
  }
  resetTV() {
    this.channel = 1;
    this.volume = 50;
  }
  TVstatus() {
    return console.log(
      `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    );
  }
}
let tv = new TV("LG");
tv.TVstatus();
