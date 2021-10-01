// yabbascript hurd
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tokenMap = {
  x: 10,
  "-": 0,
  ...arr,
};

export const deTokenizeSingleFrame = (frame: string) => {
  const throws = frame.split("");
  let result = [];
  throws.forEach((theThrow, idx) => {
    const t = Number(tokenMap[theThrow]);
    if (theThrow === "/") result.push(10 - result[idx - 1]);
    else result.push(t);
  });
  return result;
};

function arrTotal(arr) {
  return arr.reduce((t, ct) => ct + t, 0);
}

const isStrike = (frame: number[]) => frame[0] ===10
const isSpare = (frame: number[]) => arrTotal(frame) === 10

// function getNextNThrowsScore(n, scoreCard, )

export const computeScore = (scoreCard: string[]) => {
  /**
   * for each string in the scorecard
   * parse the frame
   * if its a strike look ahead 2 throws to compute this frame total
   * if it sa spare look ahead 1 throw to compute this frame total
   * else just compute this frame total
   */

  /**
   *   const totalsOfEachFrame = [];
  scoreCard.forEach((tokenisedFrame, idx) => {
      const parsedFrame = deTokenizeSingleFrame(tokenisedFrame);
      if (isStrike(tokenisedFrame)) {
          const scoreOfNext2Throws = getScoreOfNextNThrows(2, scoreCard, idx);
          const scoreOfFrame = 10+scoreOfNext2Throws;
          totalsOfEachFrame.push(scoreOfFrame);
      } else if (isSpare(parsedFrame)){
        const scoreOfNextThrow = getScoreOfNextNThrows(1);
        const scoreOfFrame = 10+scoreOfNextThrow;
        totalsOfEachFrame.push(scoreOfFrame);
      } else totalsOfEachFrame.push(conputeScoreForFrame(parsedFrame))

  })
   */


  const numericScoreCard = scoreCard.map(deTokenizeSingleFrame);
  const frames = [];
  numericScoreCard.forEach((frame, idx) => {
    if (isStrike(frame)) {
      const nextFrame = numericScoreCard[idx + 1];
      const nextFrameTotal = arrTotal(nextFrame);
      const currentFrameTotal = arrTotal(frame);
      frames.push(nextFrameTotal + currentFrameTotal);
    } else if (isSpare(frame)){
        const [nextThrow] = numericScoreCard[idx + 1];
        const totalOfCurrentFrame = arrTotal([...frame, nextThrow]);
        frames.push(totalOfCurrentFrame);
    } 
    else {
      frames.push(arrTotal(frame));
    }
  });
  return arrTotal(frames);
};
