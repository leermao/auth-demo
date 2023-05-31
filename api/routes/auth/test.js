/* eslint-disable no-console */
module.exports = {
  action: 'get-did-spaces-url',
  onStart: async ({ extraParams }) => {
    console.log('onStart', extraParams);
  },
  claims: {
    /**
     * @see asset协议 https://github.com/ArcBlock/blockchain/blob/master/did/did-auth/lib/schema/claims.js#L178
     * @param {*} param0
     * @returns
     */
    asset: async ({ extraParams }) => {
      console.log('asset333', extraParams);
      const testTrustedIssuers = ['zNKYczJHvz8QV34Mj9ofDqZgD3axaNErGQSp', 'zNKryNmcoFxUVieWmpz7btGZGfyTcbajDzzT'];
      // 只需要支持筛选 Prod Spaces
      return {
        description: `Provide NFT to create application space for ${'233'}`,
        filters: [
          {
            trustedIssuers: ['zNKq13Dr2TBHELpLDUJFGxepiGP7YHbAVxPn', 'zNKq6yG8AVbwdRBDJSNCDVJJUQD1AXdkK7Wp'].concat(
              testTrustedIssuers
            ),
            tag: 'did-storage-purchase-nft',
            // claimUrl: getPersonalSpacesClaimUrl(),
          },
        ],
      };
    },
  },
  onAuth: async ({ claims, userDid, extraParams }) => {
    console.log('onAuth', { claims, userDid, extraParams });
  },
};
