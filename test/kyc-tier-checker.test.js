const { checkKYCTier } = require('../src/kyc-tier-checker');
const assert = require('assert');

describe('KYC Tier Checker', () => {
  it('approves STANDARD tier for LIGHT requirement', () => {
    assert.strictEqual(checkKYCTier('STANDARD', 'LIGHT'), true);
  });

  it('rejects LIGHT tier for ENHANCED requirement', () => {
    assert.strictEqual(checkKYCTier('LIGHT', 'ENHANCED'), false);
  });
});