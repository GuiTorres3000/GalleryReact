import Badge from "../../../components/badge";
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
            <div className="flex flex-col gap-4">
                  {!loading ? (
                        <ImagePreview src={`/images/${photo.imageId}`} title={photo.title} imageClassname="w-[10.975rem] h-[10.975rem] rounded-lg" />
                  ) : (
                        <Skeleton className="w-[10.975rem] h-[10.975rem] rounded-lg" />
                  )}

                  <div className="flex flex-col gap-2">
                        {!loading ? (
                              <Text variant="paragraph-large" className="truncate">{photo.title}</Text>
                        ) : (
                              <Skeleton className="w-full h-6" />
                        )}

                        <div className="flex gap-1 min-h-[1.375rem]">
                              {!loading ? (
                                    <>
                                          {photo.albums.slice(0, 2).map(album => (
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
                                    Array.from({ length: 2 }).map((_, index) =>
                                          <Skeleton key={`album-loading-${index}`} className="w-full h-full rounded-sm" />)
                              )}
                        </div>
                  </div>
            </div>
      )
}