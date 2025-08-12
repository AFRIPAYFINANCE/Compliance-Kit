const crypto = require('crypto');

module.exports.verifyMemoHash = ({ transaction, clientDomain }) => {
  if (!transaction.memo || transaction.memo.type !== 'hash') {
    return {
      isValid: false,
      error: 'Transaction requires MEMO_HASH'
    };
  }

  const expectedHash = crypto
    .createHash('sha256')
    .update(clientDomain)
    .digest();

  const isValid = Buffer.compare(
    Buffer.from(transaction.memo.value, 'base64'),
    expectedHash
  ) === 0;

  return {
    isValid,
    clientDomain,
    memoHash: transaction.memo.value,
    requiredHash: expectedHash.toString('base64')
  };
};