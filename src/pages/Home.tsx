import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photoWidget";
import type { Photo } from "../contexts/photos/models/photo";

export default function Home() {
  return (
    <Container>
      <div className="flex gap-6 justify-center">
        <PhotoWidget photo={{ id: "321", title: "Olá mundo", imageId: "portrait-tower.png", albums: [{ id: "333", title: "Odio" }, { id: "222", title: "baby i'm preeing on you tonight" }, { id: "222", title: "raiva" },] }} />
        <PhotoWidget photo={{ id: "31", title: "Ol mundo", imageId: "portrait-tower.png", albums: [{ id: "333", title: "Odio" }, { id: "222", title: "baby i'm preeing on you tonight" }, { id: "222", title: "raiva" },] }} />
        <PhotoWidget photo={{ id: "11", title: "Olá undo", imageId: "portrait-tower.png", albums: [{ id: "333", title: "Odio" }, { id: "222", title: "baby i'm preeing on you tonight" }, { id: "222", title: "raiva" },] }} loading={true} />
        <PhotoWidget photo={{} as Photo} loading={true} />
      </div>
    </Container>
  )
}
