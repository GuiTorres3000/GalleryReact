import Container from "../container";
import GalleryLogo from "../../assets/images/galeria-plus-full-logo.svg?react";
import { Link, useLocation } from "react-router";
import cx from "classnames";
import Button from "../button";
import PhotoSearch from "../photoSearch";
import Divider from "../divider";
import PhotoNewDialog from "../../contexts/photos/components/photoDialog";
import AlbumDialog from "../../contexts/album/components/albumDialog";

interface MainHeaderProps extends React.ComponentProps<typeof Container> { }

export default function MainHeader({ className, ...props }: MainHeaderProps) {
  const { pathname } = useLocation();

  return (
    <Container as="header" className={cx("flex justify-between items-center gap-10", className)} {...props}>
      <Link to="/">
        <GalleryLogo className="h-5" />
      </Link>

      {pathname == "/" &&
        <>
          <PhotoSearch />
          <Divider orientation="vertical" className="h-10" />
        </>
      }

      <div className="flex items-center gap-3">
        <PhotoNewDialog trigger={<Button>Nova Foto</Button>} />
        <AlbumDialog trigger={<Button variant="secondary">Criar Álbum</Button>} />
      </div>
    </Container>
  )
}
