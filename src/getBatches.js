const HF_BLOCKS = [2889020];

function getBatches(startBlock, blockCount) {
  const batches = [];

  let batch = [];
  for (let i = 0; i < blockCount; i++) {
    batch.push(startBlock + i);

    if (batch.length === 50 || i === blockCount - 1) {
      batches.push(batch.filter(block => !HF_BLOCKS.includes(block)));
      batch = [];
    }
  }

  return batches;
}

module.exports = getBatches;
