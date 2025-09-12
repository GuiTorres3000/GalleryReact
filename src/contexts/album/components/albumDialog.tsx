import Button from "../../../components/button";
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogBody, DialogFooter } from "../../../components/dialog";

interface AlbumDialogProps {
      trigger: React.ReactNode;
}

export default function AlbumDialog({ trigger }: AlbumDialogProps) {
      return (
            <Dialog>
                  <DialogTrigger asChild>{trigger}</DialogTrigger>
                  <DialogContent>
                        <DialogHeader></DialogHeader>
                        <DialogBody></DialogBody>
                        <DialogFooter>
                              <DialogClose asChild>
                                    <Button variant="secondary">Cancelar</Button>
                                    <Button>Criar</Button>
                              </DialogClose>
                        </DialogFooter>
                  </DialogContent>
            </Dialog>
      )
}
