export const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || !onCancel) return
  const confirmAction = () => {
    if (window.confirm(message)) return onConfirm()
    return onCancel()
  }
  return confirmAction
}
