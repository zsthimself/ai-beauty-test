// Reexport sonner for consistency
import { toast, type ToastT } from "sonner"

export { toast }
export type { ToastT as Toast }

export const useToast = () => {
  return {
    toast
  }
} 