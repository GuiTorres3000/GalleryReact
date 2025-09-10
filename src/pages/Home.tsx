import Container from "../components/container";
import PhotosList from "../contexts/photos/components/PhotosList";
export default function Home() {
  return (
    <Container>
      <PhotosList photos={[
        { id: "321", 
          title: "Olá mundo", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Odio" }, { id: "222", title: "baby i'm preeing on you tonight" }, { id: "222", title: "raiva" },] 
        },
         { id: "123", 
          title: "Olá mundo", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Odio" }, { id: "222", title: "baby i'm preeing on you tonight" }, { id: "222", title: "raiva" },] 
        },
        { id: "3", 
          title: "Olá mundo", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Odio" }, { id: "222", title: "baby i'm preeing on you tonight" }, { id: "222", title: "raiva" },] 
        },
        { id: "13", 
          title: "Titulo bem grandao", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Odio" }, { id: "222", title: "baby i'm preeing on you tonight" }, { id: "222", title: "raiva" },] 
        },
        { id: "13", 
          title: "Titulo bem bem bem bem bembbemb embme grandao", 
          imageId: "portrait-tower.png", 
          albums: [{ id: "333", title: "Odio" }, { id: "222", title: "baby i'm preeing on you tonight" }, { id: "222", title: "raiva" },] 
        },
      ]} loading={false}/>
    </Container>
  )
}
