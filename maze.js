let maze = (input) => {
  if (((input) + 1) % 4 !== 0 || input < 0){
    console.log("input must be a positive number and contain of 4n-1")
  } else {
    for (let i = 0; i < input; i++) {
      let output = ""
      for (let j = 0; j < input; j++) {
          if (i === 0 || i === input - 1 || j === 0 || j === input - 1 || i % 2 === 0) {
              if (i % 4 === 0 && j === 1) {
                  output += " "
              } else if (i % 2 === 0 && i % 4 !== 0 && j === input - 2) {
                  output += " "
              } else {
                  output += "@"
              }
          } else {
              output += " "
          }
      }
      console.log(output);
    }
  }
}

maze(11)
