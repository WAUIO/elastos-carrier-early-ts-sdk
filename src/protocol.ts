/**
 * Represents a vault data location
 * @todo: for now I'm not sure which kind of parameters this should take 
 * so I just let it as string, feel free to change to any other type 
 */
 export type IVaultLocation = string;

 /**
  * Represents the acknowledgment status of a transfer action assuming
  * many scenarios can happen during a transfer
  */
 export type ITransferAcknowledgment  = any;

/**
 * Process a vault-to-vault transfer (hard-code)
 * 
 * @param source 
 * @param destination 
 */
export const transferVaultData = async (source: IVaultLocation, destination: IVaultLocation): Promise<ITransferAcknowledgment> => {
  // @todo: any help would be welcome to fill and complete this helper method
  return Promise.reject('Not implemented')
}