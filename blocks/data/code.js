export const run = state => {
  state.data4d = [
		[0.1, 0.3, 0.4, 0.8],
    [0.6, 0.1, 0.5, 0.7],
    [0.2, 0.8, 0.2, 0.3],
    [0.1, 0.2, 0.3, 0.4],
    [0.8, 0.7, 0.6, 0.5],
    [0.5, 0.2, 0.8, 0.3],
    [0.9, 0.1, 0.9, 0.1],
    [0.1, 0.9, 0.1, 0.1],
    [0.2, 0.5, 0.9, 0.9],
    [0.1, 0.1, 0.2, 0.1]
  ]
  
  state.datalabels = [
  	"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"  
  ]
}

export const update = state => {
  // This code is ran once every iteration in render or work modes
}
