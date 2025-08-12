const { verifyMemoHash } = require('../src/memo-hash');
const assert = require('assert');

describe('MEMO_HASH Validator', () => {
  it('validates correct MEMO_HASH', () => {
    const result = verifyMemoHash({
      transaction: {
        memo: {
          type: 'hash',
          value: 'YjM3N2E1ZTg0OWE5OWYwN2Y1YzA0OGUyMDBhYWM0MjI='
        }
      },
      clientDomain: 'afripay.app'
    });
    assert.strictEqual(result.isValid, true);
  });

  it('rejects missing MEMO_HASH', () => {
    const result = verifyMemoHash({
      transaction: { memo: null },
      clientDomain: 'afripay.app'
    });
    assert.strictEqual(result.isValid, false);
  });
});