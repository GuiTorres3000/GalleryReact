import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photoWidget";

export default function Home() {
  return (
    <Container>
      <PhotoWidget photo={{id: "321", title: "Olá mundo", imageId: "portrait-tower.png", albums: [{id: "333", title: "Odio"},  {id: "222", title: "baby i'm preeing on you tonight"}, {id: "222", title: "raiva"},]}} />
    </Container>
  )
}
