import { transferVaultData } from '../src'

describe("Testing `transferVaultData`", () => {
  test('data from vault-1 transfered to vault-2', async () => {
    // @todo: location-X here are still undefined, any possible value can be accepted depends on what the service needs to fullfil the operation
    await expect(transferVaultData('vault://location-1/fs/data.raw', 'vault://location-2/fs/data.raw')).resolves.toBeTruthy();
  })
})