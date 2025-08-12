# Stellar Compliance Toolkit
> Automated compliance checks for anchors

```javascript
import { verifyMemoHash } from '@afripay/compliance-kit';

const isValid = verifyMemoHash({
  transaction: tx,
  clientDomain: 'user.com'
});