import type React from "react";
import Button from "../../../components/button";
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogBody, DialogFooter } from "../../../components/dialog";
import InputText from "../../../components/inputText";
import Text from "../../../components/text";
import SelectCheckboxIlustration from "../../../assets/images/select-checkbox.svg?react"
import Skeleton from "../../../components/skeleton";
import PhotoImageSelectable from "../../photos/components/photoImageSelectable";
import usePhotos from "../../photos/hooks/usePhotos";
import { useForm } from "react-hook-form";
import { albumNewFormSchema, type AlbumNewFormSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import useAlbum from "../hooks/useAlbum";

interface AlbumDialogProps {
      trigger: React.ReactNode;
}

export default function AlbumDialog({ trigger }: AlbumDialogProps) {
      const [modalOpen, setModalOpen] = useState(false);
      const form = useForm<AlbumNewFormSchema>({ resolver: zodResolver(albumNewFormSchema) });
      const { photos, isLoadingPhotos } = usePhotos();

      const { createAlbum } = useAlbum();
      const [ isCreatingAlbum, setIsCreatingAlbum ] = useTransition();


      useEffect(() => {
            if (!modalOpen) {
                  form.reset();
            }
      }, [modalOpen, form]);

      function handleTogglePhoto(selected: boolean, photoId: string) {
            const photosIds = form.getValues("photosIds") || [];
            let newValue = [];

            if (selected) {
                  newValue = [...photosIds, photoId];
            } else {
                  newValue = photosIds.filter((id) => id !== photoId);
            }

            form.setValue("photosIds", newValue);
      }


      function handleSubmitPhoto(payload: AlbumNewFormSchema) {
            setIsCreatingAlbum(async () => {
                  await createAlbum(payload);
                  setModalOpen(false);
            })
      }
 
      return (
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                  <DialogTrigger asChild>{trigger}</DialogTrigger>
                  <DialogContent>
                        <form onSubmit={form.handleSubmit(handleSubmitPhoto)}>
                              <DialogHeader>Criar Álbum</DialogHeader>
                              <DialogBody className="flex flex-col gap-5">
                                    <InputText placeholder="Adicione um titulo" error={form.formState.errors.title?.message}
                                          {...form.register('title')} />
                                    {!isLoadingPhotos && photos.length > 0 && (
                                          <div className="flex flex-wrap gap-2">
                                                {photos.map((photo) => (
                                                      <PhotoImageSelectable
                                                            key={photo.id}
                                                            src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
                                                            title={photo.title}
                                                            imageClassname="w-20 h-20"
                                                            onSelectImage={(selected) => (
                                                                  handleTogglePhoto(selected, photo.id)
                                                            )}
                                                      />
                                                ))}
                                          </div>
                                    )}

                                    {isLoadingPhotos && (
                                          <div className="flex flex-wrap gap-2">
                                                {Array.from({ length: 4 }).map((_, index) => (
                                                      <Skeleton key={`photo-loading-${index}`} className="w-20 h-20 rounded" />
                                                ))}
                                          </div>
                                    )}

                                    <div className="space-y-3">
                                          <Text as="div" variant="label-small">Fotos Cadastradas</Text>
                                          {!isLoadingPhotos && photos.length === 0 && (
                                                <div className="w-full flex flex-col justify-center items-center gap-3">
                                                      <SelectCheckboxIlustration />
                                                      <Text variant="paragraph-medium" className="text-center">Nenhuma foto disponível para seleção</Text>
                                                </div>
                                          )}
                                    </div>
                              </DialogBody>
                              <DialogFooter>
                                    <DialogClose asChild>
                                          <Button variant="secondary" disabled={isCreatingAlbum}>Cancelar</Button>
                                    </DialogClose>
                                    <Button type="submit" disabled={isCreatingAlbum} handling={isCreatingAlbum}>{isCreatingAlbum ? "Criar" : "Criando"}</Button>
                              </DialogFooter>
                        </form>
                  </DialogContent>
            </Dialog>
      )
}
