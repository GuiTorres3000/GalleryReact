import { useTransition } from "react";
import Divider from "../../../components/divider";
import InputCheckbox from "../../../components/inputCheckbox";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import usePhotoAlbums from "../../photos/hooks/usePhotoAlbums";
import type { Photo } from "../../photos/models/photo";
import type { Album } from "../models/album";

interface AlbumsListSelectableProps {
  albums: Album[];
  photo: Photo;
  loading?: boolean;
}

export default function AlbumsListSelectable({ albums, photo, loading }: AlbumsListSelectableProps) {
  const { managePhotoOnAlbum } = usePhotoAlbums()
  const [isUpdatingPhoto, setIsUpdatingPhoto] = useTransition();

  function isChecked(albumId: string) {
    return photo?.albums?.some(album => album.id === albumId);
  }

  function handlePhotoAlbums(albumId: string) {
    let albumIds = [];
    if (isChecked(albumId)) {
      albumIds = photo.albums.filter(album => album.id !== albumId).map(album => album.id)
    } else {
      albumIds = [...photo.albums.map(album => album.id), albumId];
    }

    setIsUpdatingPhoto(async () => {
      await managePhotoOnAlbum(photo.id, albumIds);
    })
  }

  return (
    <ul className="flex flex-col gap-4">
      {!loading && albums?.length > 0 && albums.map((album, index) => (
        <li key={album.id}>
          <div className="flex items-center justify-between gap-1">
            <Text variant="paragraph-large" className="truncate">{album.title}</Text>
            <InputCheckbox defaultChecked={isChecked(album.id)} onChange={() => handlePhotoAlbums(album.id)}
              disabled={isUpdatingPhoto} />
          </div>
          {index != albums.length - 1 && <Divider className="mt-4" />}
        </li>
      ))}

      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <li key={`albums-list-${index}`}>
            <Skeleton className="h-[2.5rem]" />
          </li>
        ))}
    </ul>
  )
}