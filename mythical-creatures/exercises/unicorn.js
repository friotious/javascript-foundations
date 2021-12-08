class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite() {
    if (this.color != 'white') {
      return false
    }
  }
    says(words) {
      return `**;* ${words} *;**`
    }
    //   if (this.color.length === 0) {
    //     this.color.replace('white', color)
    //   }
    }




//this.color = color
//
//this.color.replace('white', color)
//
// if (color != 'white') {
// this.color.push(color)

module.exports = Unicorn;


// class Unicorn {
//   constructor(name, color) {
//     this.name = name;
//     this.color = 'white'
//   }
//     isWhite(color) {
//       if (color.length < 1) {
//       this.color = color
//       }
//     }
// }
