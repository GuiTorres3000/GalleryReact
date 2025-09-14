import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogBody, DialogFooter } from "../../../components/dialog";
import InputText from "../../../components/inputText";
import Button from "../../../components/button";
import Alert from "../../../components/alert";
import InputSingleFile from "../../../components/inputSingleFile";
import ImagePreview from "../../../components/imagePreview";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";
import useAlbums from "../../album/hooks/useAlbums";

interface PhotoDialogProps {
      trigger: React.ReactNode;
}

export default function PhotoDialog({ trigger }: PhotoDialogProps) {

      const form = useForm();
      const {albums, isLoadingAlbums } = useAlbums();

      return (
            <Dialog>
                  <DialogTrigger asChild>{trigger}</DialogTrigger>
                  <DialogContent>
                        <DialogHeader>Adicionar foto</DialogHeader>
                        <DialogBody className="flex flex-col gap-5">
                              <InputText placeholder="Adicione um titulo"/>

                              <div>
                                    <Alert>
                                          Tamanho máximo: 50MB
                                          <br />
                                          Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP
                                    </Alert>
                              </div>

                              <InputSingleFile form={form} allowedExtensions={[".png", ".jpg", ".jpeg", ".webp"]} maxFileSizeinMB={50}
                                    replaceBy={<ImagePreview className="w-full h-56" />}
                              />

                              <div className="space-y-3">
                                    <Text variant="label-small">Selecionar álbuns</Text>
                                    <div className="flex flex-wrap gap-3">
                                          {!isLoadingAlbums && albums.length > 0 && albums.map(album => (
                                                <Button key={album.id} variant="ghost" size="sm" className="truncate">{album.title}</Button>
                                          ))}

                                          {isLoadingAlbums && Array.from({ length: 5 }).map((_, index) =>
                                                <Skeleton key={`album-loading-${index}`} className="w-20 h-7" />
                                          )}
                                    </div>
                              </div>
                        </DialogBody>
                        <DialogFooter>
                              <DialogClose asChild>
                                    <Button variant="secondary">Cancelar</Button>
                              </DialogClose>
                              <Button>Adicionar</Button>
                        </DialogFooter>
                  </DialogContent>
            </Dialog>
      );
}