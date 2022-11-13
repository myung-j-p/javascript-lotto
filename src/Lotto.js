const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers)
    this.#numbers = numbers;
  }

  validate(numbers, limit) {
    if (numbers.length !== limit) {
      throw new Error(`[ERROR] 입력 번호는 ${limit}개여야 합니다.`);
    }
    
    numbers.forEach(number => {
      if (number > 45 || number < 1) {
        throw new Error("[ERROR] 번호의 범위는 1~45 입니다.");}
    })

    const orderedNumbers = new Set(numbers)
    if(Array.from(orderedNumbers).length !== limit){
      throw new Error("[ERROR] 중복된 숫자가 있습니다.")
    }

    return 
  }

  validateBonus(winningNumber,bonusNumber){
    winningNumber.forEach(number => {
      if(number == bonusNumber[0])
      throw new Error(`[ERROR] 당첨 번호와 중복됩니다.`);
    });
  }

  checkCorrect(winningAndBonusNum, makedLottos){
    const winningNum = winningAndBonusNum[0];
    const bonusNum = winningAndBonusNum[1];
    const correctNums = [];
    let correctBonus = 0;

    for (let i = 0; i < makedLottos.length; i++) {
      const correctNum = makedLottos[i].filter(number => winningNum.includes(String(number)));
      const matchBonus = this.checkBonus(makedLottos[i], ...bonusNum)

      if (correctNum.length == 5 && matchBonus) correctBonus += 1;
      else correctNums.push(correctNum.length);
    }
    this.checkResult(correctNums, correctBonus);
    return correctNums
  }


  checkBonus(correctFiveNumLottos, bonusNum) {
    return correctFiveNumLottos.includes(Number(bonusNum))
  }


  checkResult(correctNums, correctBonus) {

  }



  printResult() {
    
  }

  // TODO: 추가 기능 구현
}




//>>>>>>>>>>>>test<<<<<<<<<<<<<<
// lotto.inputWinningNumber();
// lotto.start()


module.exports = Lotto;
