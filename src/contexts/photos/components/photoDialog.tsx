import type React from "react";
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
import { photoFormSchema, type PhotoFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

interface PhotoDialogProps {
      trigger: React.ReactNode;
}

export default function PhotoDialog({ trigger }: PhotoDialogProps) {

      const [modalOpen, setModalOpen] = useState(false);
      const form = useForm<PhotoFormSchema>({
            resolver: zodResolver(photoFormSchema),
      });
      const file = form.watch("file");
	const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

      const { albums, isLoadingAlbums } = useAlbums();

      useEffect(() => {
            if(!modalOpen) form.reset();
      }, [modalOpen, form])

      function handleSubmit(payload: PhotoFormSchema) {
            console.log(payload);
      }

      return (
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                  <DialogTrigger asChild>{trigger}</DialogTrigger>
                  <DialogContent>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                              <DialogHeader>Adicionar foto</DialogHeader>
                              <DialogBody className="flex flex-col gap-5">
                                    <InputText placeholder="Adicione um titulo" maxLength={100} error={form.formState.errors.title?.message}
                                          {...form.register("title")} />

                                    <div>
                                          <Alert>
                                                Tamanho máximo: 50MB
                                                <br />
                                                Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP
                                          </Alert>
                                    </div>

                                    <InputSingleFile form={form} allowedExtensions={["png", "jpg", "jpeg", "webp"]} maxFileSizeinMB={50}
                                          replaceBy={<ImagePreview src={fileSrc} imageClassname="w-full h-56" />} 
                                          error={form.formState.errors.file?.message} 
                                          {...form.register("file")}
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
                                    <Button type="submit">Adicionar</Button>
                              </DialogFooter>
                        </form>
                  </DialogContent>
            </Dialog>
      );
}