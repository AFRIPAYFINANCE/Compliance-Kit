const { verifyMemoHash } = require('./memo-hash');
const { checkKYCTier } = require('./kyc-tier-checker');

module.exports = {
  verifyMemoHash,
  checkKYCTier,
  VERSION: '1.0.0'
};