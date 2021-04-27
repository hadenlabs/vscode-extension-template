// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { Config } from './domain'

const cfg = new Config(vscode.workspace.getConfiguration('vscodeExtensionTemplate'))

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand('vscodeExtensionTemplate.command', () => {
    return
  })

  const newWindowdisposable = vscode.commands.registerCommand(
    'vscodeExtensionTemplate.commandNewWindow',
    () => {
      return
    }
  )

  context.subscriptions.push(disposable, newWindowdisposable)
}

exports.activate = activate

// this method is called when your extension is deactivated
export function deactivate(): void {
  //clear things
}

exports.deactivate = deactivate
