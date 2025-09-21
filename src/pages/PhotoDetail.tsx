import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "./PhotosNavigator";
import ImagePreview from "../components/imagePreview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/album/components/albumsListSelectable";
import useAlbums from "../contexts/album/hooks/useAlbums";
import usePhoto from "../contexts/photos/hooks/usePhoto";
import type { Photo } from "../contexts/photos/models/photo";
import { useTransition } from "react";

export default function PhotoDetail() {

  const { id } = useParams();
  const { photo, previousPhotoId, nextPhotoId, isLoadingPhoto, deletePhoto } = usePhoto(id);
  const { albums, isLoadingAlbums } = useAlbums();
  const [isDeletingPhoto, setIsDeletingPhoto] = useTransition();

  function handleDeletePhoto() {
    setIsDeletingPhoto(async () => {
      await deletePhoto(photo!.id);
    });
  }

  if (!isLoadingPhoto && !photo) {
    return <div>Foto não encontrada</div>
  }

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator previusPhotoId={previousPhotoId} nextPhotoId={nextPhotoId} loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-4">
          {!isLoadingPhoto ? (
            <>
              <div className="flex flex-col gap-3">
                <ImagePreview src={`${import.meta.env.VITE_IMAGES_URL}/${photo?.imageId}`} title={photo?.title} imageClassname="h-[21rem]" />
              </div>

              <Button variant="destructive" onClick={handleDeletePhoto} disabled={isDeletingPhoto}>{isDeletingPhoto ? "Excluindo..." : "Excluir"}</Button>
            </>
          ) : (
            <>
              <Skeleton className="h-[21rem]" />

              <Button variant="destructive">Excluir</Button>
            </>
          )}

        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">Álbums</Text>
          <AlbumsListSelectable photo={photo as Photo} albums={albums} loading={isLoadingAlbums} />
        </div>
      </div>
    </Container>
  )
}
