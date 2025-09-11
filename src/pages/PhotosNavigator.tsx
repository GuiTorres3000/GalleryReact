import ButtonIcon from "../components/buttonIcon";
import Skeleton from "../components/skeleton";
import ArrowLeft from "../assets/icons/chevron-left.svg?react";
import ArrowRight from "../assets/icons/chevron-right.svg?react";
import Button from "../components/button";
import { useNavigate } from "react-router";
import cx from "classnames";

interface PhotosNavigatorProps extends React.ComponentProps<"div"> {
      previusPhotoId?: string;
      nextPhotoId?: string;
      loading?: boolean;
      className?: string;
}

export default function PhotosNavigator({ previusPhotoId, nextPhotoId, loading, className, ...props }: PhotosNavigatorProps) {
      const navigate = useNavigate();

      return (
            <div className={cx("flex gap-2", className)} {...props }>
                  {!loading ? (
                        <>
                              <ButtonIcon icon={ArrowLeft} variant="secondary" disabled={!previusPhotoId}
                                    onClick={() => navigate(`/photo/${previusPhotoId}`)} />

                              <Button icon={ArrowRight} variant="secondary" disabled={!nextPhotoId}
                                    onClick={() => navigate(`/photo/${nextPhotoId}`)} >
                                    Próxima Imagem
                              </Button>
                        </>
                  ) : (
                        <>
                              <Skeleton className="w-10 h-10" />
                              <Skeleton className="w-24 h-10 " />
                        </>
                  )
}

            </div >
      )
}
