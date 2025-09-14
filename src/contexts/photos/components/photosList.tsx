import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Photo } from "../models/photo";
import PhotoWidget from "./photoWidget";

interface PhotosListProps {
      photos: Photo[];
      loading?: boolean;
}

export default function PhotosList({ photos, loading }: PhotosListProps) {
      return (
            <>
                  <Text as="div" variant="paragraph-large" className="flex items-center justify-end text-accent-span gap-1 mb-2">Total: {" "}
                        {!loading ? (
                              <div>{photos.length}</div>
                        ) : (
                              <Skeleton className="h-5 w-5" />
                        )}

                  </Text>

                  <div className="grid grid-cols-3 gap-6">
                        {!loading && photos.length > 0 && photos.map(photo =>
                              <PhotoWidget key={photo.id} photo={photo} />
                        )}

                        {loading && Array.from({ length: 3 }).map((_, index) =>
                              <PhotoWidget key={`photo-loading-${index}`} photo={{} as Photo} loading={true} />
                        )}

                  {!loading && photos.length === 0 && (
                        <div className="col-span-3 flex justify-center items-center h-full">
                              <Text variant="paragraph-large">Nenhuma foto encontrada</Text>
                        </div>
                  )}
            </div >

            </>
      )
}
