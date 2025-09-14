import useAlbums from "../contexts/album/hooks/useAlbums";
import usePhotos from "../contexts/photos/hooks/usePhotos";

import Container from "../components/container";
import AlbumsFilter from "../contexts/album/components/albumsFilter";
import PhotosList from "../contexts/photos/components/photosList";

export default function Home() {
  const {albums, isLoadingAlbums} = useAlbums();
  const {photos, isLoadingPhotos} = usePhotos();
  
  return (
    <Container>
      <AlbumsFilter albums={albums} loading={isLoadingAlbums} className="mb-2"/>
      <PhotosList photos={photos} loading={isLoadingPhotos}/>
    </Container>
  )
}
