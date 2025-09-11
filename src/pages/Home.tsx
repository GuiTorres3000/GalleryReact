import Container from "../components/container";
import AlbunsFilter from "../contexts/album/components/albunsFilter";
import PhotosList from "../contexts/photos/components/photosList";

export default function Home() {
  return (
    <Container>
      <AlbunsFilter albums={[{ id: "333", title: "Test" }, { id: "123", title: "Test2" }, { id: "222", title: "AlbumCool" }]} loading={false} className="mb-2"/>
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
