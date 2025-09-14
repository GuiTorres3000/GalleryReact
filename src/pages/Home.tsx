import Container from "../components/container";
import AlbumsFilter from "../contexts/album/components/albumsFilter";
import useAlbums from "../contexts/album/hooks/useAlbums";
import PhotosList from "../contexts/photos/components/photosList";

export default function Home() {
  const {albums, isLoadingAlbums} = useAlbums();
  
  return (
    <Container>
      <AlbumsFilter albums={albums} loading={isLoadingAlbums} className="mb-2"/>
      <PhotosList photos={[
        { id: "321", 
          title: "Fotinho legal", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Test" }, { id: "123", title: "Test2" }, { id: "222", title: "AlbumCool" },] 
        },
         { id: "123", 
          title: "Olá mundo", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Test" }, { id: "123", title: "Test2" }, { id: "222", title: "AlbumCool" },] 
        },
        { id: "3", 
          title: "Olá mundo!", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Test" }, { id: "222", title: "AlbumCool" },] 
        },
        { id: "13", 
          title: "Titulo titulo titulo", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "222", title: "AlbumCool" },] 
        },
        { id: "13", 
          title: "Titulo gigantic ultra hiper title", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Test" }, { id: "123", title: "Test2" } ] 
        },
      ]} loading={false}/>
    </Container>
  )
}
