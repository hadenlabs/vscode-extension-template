import { WorkspaceConfiguration } from 'vscode'

/**
 * @typedef Config
 * @type {Object}
 * @class Config
 */
export default class Config extends Object {
  constructor(vscodeCfg?: WorkspaceConfiguration) {
    super()
  }

  loadConfigFromVsCode(vscodeConfig: WorkspaceConfiguration): void {
    return
  }
}
