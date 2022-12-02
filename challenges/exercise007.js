/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  const sum = n
    .toString()
    .split("")
    .reduce((prev, curr) => +prev + +curr, 0);
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined)
    console.log(
      "FYI: Optional step parameter not provided. Remove this check once you've handled the optional step!"
    );
  const arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, dat) => {
  if (users === undefined) throw new Error("users is required");
  if (dat === undefined) throw new Error("date is required");

  // Check the most usage
  const userMostUsageArr = users
    .filter((user) => {
      const { screenTime } = user;
      let tot = 0;
      screenTime.forEach((e) => {
        const { date, usage } = e;
        if (date === dat) {
          for (let key in usage) {
            tot += +usage[key];
          }
        }
      });
      return tot > 100;
    })
    .map((user) => user.username);
  // console.log(userMostUsageArr);
  return userMostUsageArr;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  const hexToRgb = hexStr
    .replace("#", "")
    .match(/.{2}/g)
    .map((e) => parseInt(e, 16))
    .join(",");

  return `rgb(${hexToRgb})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");
  let winner;
  let colOne = [];
  let colTwo = [];
  let colThree = [];
  let diagOne = [];
  let diagTwo = [];

  // //Check if player is a winner
  const isPlayerWinner = (playerPos) => {
    return playerPos.every((e, i, arr) => e === arr[0]);
  };

  //get column positions of player
  const getCol = (col, colNum) => {
    if (colNum === 0) colOne.push(col);
    if (colNum === 1) colTwo.push(col);
    if (colNum === 2) colThree.push(col);
  };

  //get diagonal positions of player
  const getDiagonalOne = (rowNum, colNum, arr) => {
    if (rowNum === colNum) {
      diagOne.push(arr[colNum]);
    }
  };

  const getDiagonalTwo = (rowNum, colNum, arr) => {
    if (rowNum === 0 && colNum == arr.length - (rowNum + 1))
      diagTwo.push(arr[colNum]);
    else if (rowNum === 1 && colNum == arr.length - (rowNum + 1))
      diagTwo.push(arr[colNum]);
    else if (rowNum === 2 && colNum == arr.length - (rowNum + 1))
      diagTwo.push(arr[colNum]);
  };
  for (let rowNum in board) {
    rowNum = +rowNum;
    // check rows
    if (isPlayerWinner(board[rowNum])) {
      winner = board[0][0];
      break;
    } else {
      board[rowNum].forEach((player, colNum, arr) => {
        getCol(player, colNum);
        getDiagonalOne(rowNum, colNum, arr);
        getDiagonalTwo(rowNum, colNum, arr);
      });

      // check columns
      if (isPlayerWinner(colOne)) winner = colOne[0];
      else if (isPlayerWinner(colTwo)) winner = colTwo[0];
      else if (isPlayerWinner(colThree)) winner = colThree[0];
      // check diagonals
      else if (isPlayerWinner(diagOne)) winner = diagOne[0];
      else if (isPlayerWinner(diagTwo)) winner = diagTwo[0];
      else winner = null;
    }
  }
  return winner;
};
