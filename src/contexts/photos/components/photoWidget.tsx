import { Link } from "react-router";
import Badge from "../../../components/badge";
import { buttonTextVariants, buttonVariants } from "../../../components/button";
import ImagePreview from "../../../components/imagePreview";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Photo } from "../models/photo";

interface PhotoWidgetProps {
      photo: Photo;
      loading?: boolean;
}

export default function PhotoWidget({ photo, loading }: PhotoWidgetProps) {
      return (
            <div className="p-1 w-[14rem]">
                  <div className="flex flex-col gap-4">
                        {!loading ? (
                              <div className="flex justify-center">
                                    <ImagePreview src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`} title={photo.title} imageClassname="w-[13.5625rem] h-[13.5625rem] rounded-lg" />
                              </div>
                        ) : (
                              <div className="flex justify-center">
                                    <Skeleton className="w-[13.5625rem] h-[13.5625rem] rounded-lg" />
                              </div>
                        )}

                        <div className="flex flex-col gap-2 text-center">
                              {!loading ? (
                                    <Text variant="paragraph-large" className="truncate">{photo.title}</Text>
                              ) : (
                                    <Skeleton className="w-full h-6" />
                              )}

                              <div className="flex gap-1 min-h-[1.375rem]">
                                    {!loading ? (
                                          <>
                                                {!loading && photo.albums.slice(0, 2).map(album => (
                                                      <Badge className="truncate" size="xs" key={album.id}>
                                                            {album.title.length > 10 ? album.title.slice(0, 10) + "..." : album.title}
                                                      </Badge>
                                                ))}
                                                {/*Se houver mais de uma foto*/}
                                                {photo.albums.length > 2 &&
                                                      <Badge size="xs">+ {photo.albums.length - 2}</Badge>
                                                }
                                          </>
                                    ) : (
                                          Array.from({ length: 3 }).map((_, index) =>
                                                <Skeleton
                                                      key={`album-loading-${index}`}
                                                      className="w-[5rem] h-[1.375rem] rounded-sm"
                                                />
                                          )
                                    )}
                              </div>
                        </div>

                        {!loading ? (
                              <Link to={`/photo/${photo.id}`} className={buttonVariants({ variant: "secondary", className: "px-2 py-2" })}>
                                    <Text className={buttonTextVariants({ variant: "secondary", size: "sm" })}>Detalhes da Imagem</Text>
                              </Link>
                        ) : (
                              <Skeleton className="w-full h-10" />
                        )}
                  </div>
            </div>
      )
}