const KYCTiers = {
  ANONYMOUS: 0,
  LIGHT: 1,
  STANDARD: 2,
  ENHANCED: 3
};

module.exports.checkKYCTier = (userTier, requiredTier) => {
  const userLevel = KYCTiers[userTier.toUpperCase()] ?? -1;
  const requiredLevel = KYCTiers[requiredTier.toUpperCase()] ?? Infinity;

  if (userLevel === -1) {
    throw new Error(`Invalid user KYC tier: ${userTier}`);
  }

  return userLevel >= requiredLevel;
};