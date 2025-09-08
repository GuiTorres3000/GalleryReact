
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Card from "./card";
import cn from "classnames";

export const Dialog = DialogPrimitive.Root;           // Controle do dialog geral
export const DialogTrigger = DialogPrimitive.Trigger; // Usado para abrir o dialog
export const DialogClose = DialogPrimitive.Close;     // Fechar o dialog


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DialogContent({ className, ref, children, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>) {
      return (
            <DialogPrimitive.Portal>
                  <DialogPrimitive.Content ref={ref} className={cn(`
                        fixed left-[50%] top-[50%] w-full max-w-[32rem]
                        z-[60] translate-x-[-50%] translate-y-[-50%]
                        data-[state=open]:animate-in
                        data-[state=open]:fade-in-0
                        data-[state=open]:slide-in-from-bottom-[48%]
                         data-[state=closed]:animate-out
                        data-[state=closed]:fade-out-0
                        data-[state=closed]:slide-out-to-bottom-[48%]
                        `, className )} {...props} >
                        <Card size="lg" variant="primary">
                              {children}
                        </Card>
                  </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
      );
}