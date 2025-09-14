import type React from "react";
import Button from "../../../components/button";
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogBody, DialogFooter } from "../../../components/dialog";
import InputText from "../../../components/inputText";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import SelectCheckboxIlustration from "../../../assets/images/select-checkbox.svg?react"
import Skeleton from "../../../components/skeleton";
import ImagePreview from "../../../components/imagePreview";
import PhotoImageSelectable from "../../photos/components/photoImageSelectable";
import usePhotos from "../../photos/hooks/usePhotos";

interface AlbumDialogProps {
      trigger: React.ReactNode;
}

export default function AlbumDialog({ trigger }: AlbumDialogProps) {

      const {photos, isLoadingPhotos } = usePhotos();

      function handleTogglePhoto(selected: boolean, photoId: string){
            console.log(selected, photoId);
      }

      return (
            <Dialog>
                  <DialogTrigger asChild>{trigger}</DialogTrigger>
                  <DialogContent>
                        <DialogHeader>Criar Álbum</DialogHeader>
                        <DialogBody className="flex flex-col gap-5">
                              <InputText placeholder="Adicione um titulo" />
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
                                    <Button variant="secondary">Cancelar</Button>
                              </DialogClose>
                              <Button>Criar</Button>
                        </DialogFooter>
                  </DialogContent>
            </Dialog>
      )
}
