import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import Skeleton from "../components/skeleton";
import type { Photo } from "../contexts/photos/models/photo";
import PhotosNavigator from "./PhotosNavigator";
import ImagePreview from "../components/imagePreview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/album/components/albumsListSelectable";
import useAlbums from "../contexts/album/hooks/useAlbums";

export default function PhotoDetail() {

  //const { id } = useParams();
  const {albums, isLoadingAlbums } = useAlbums();
  
  const isLoadingPhoto = false;
  const photo = {
    id: "321",
    title: "Fotinho legal",
    imageId: "portrait-tower.png",
    albums: [{ id: "333", title: "Test" }, { id: "123", title: "Test2" }, { id: "222", title: "AlbumCool" },]
  } as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-4">
          {!isLoadingPhoto ? (
            <>
              <div className="flex flex-col gap-3">
                <ImagePreview src={`/images/${photo.imageId}`} title={photo.title} imageClassname="h-[21rem]" />
              </div>

              <Button variant="destructive">Excluir</Button>
            </>
          ) : (
            <>
              <Skeleton className="h-[21rem]" />^

              <Button variant="destructive">Excluir</Button>
            </>
          )}

        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">Álbums</Text>
          <AlbumsListSelectable photo={photo} albums={albums} loading={isLoadingAlbums}/>
        </div>
      </div>
    </Container>
  )
}
