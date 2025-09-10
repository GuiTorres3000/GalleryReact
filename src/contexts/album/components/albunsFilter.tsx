import Button from "../../../components/button";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Album } from "../models/album";
import cx from "classnames";

interface AlbunsFilterProps extends React.ComponentProps<"div"> {
      albums: Album[];
      loading?: boolean
}

export default function AlbunsFilter({ albums, loading, className, ...props }: AlbunsFilterProps) {
      return (
            <div className={cx("flex items-center gap-3.5 overflow-x-auto", className)} {...props}>
                  <Text variant="heading-small">Álbuns</Text>

                  {!loading ? (
                        <div className="flex gap-3">
                              <Button variant="primary" size="sm" className="cursor-pointer">Todos</Button>
                              {!loading && (
                                    albums.map((album) =>
                                          <Button variant="ghost" size="sm" className="cursor-pointer">{album.title}</Button>
                                    ))}
                        </div>
                  ) : (
                        Array.from({ length: 4 }).map((_, index) => (
                              <Skeleton key={`album-button-loading-${index}`} className="w-16 h-7"/>
                        ))
                  )}
            </div>
      )
}
