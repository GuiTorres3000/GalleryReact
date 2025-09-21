import { toast } from "sonner";
import type { AlbumNewFormSchema } from "../../schema";
import { api } from "../../../helpers/api";
import type { Album } from "../models/album";
import { useQueryClient } from "@tanstack/react-query";

export default function useAlbum() {
  const queryClient = useQueryClient();

  async function createAlbum(payload: AlbumNewFormSchema) {
    try {
      const { data: album } = await api.post<Album>("/albums", {
        title: payload.title,
      });

      if (payload.photosIds && payload.photosIds.length > 0) {
        await Promise.all(
          payload.photosIds.map((photoId: string) => {
            return api.put(`/photos/${photoId}/albums`, {
              albumsIds: [album.id],
            });
          })
        );
      }
      
      queryClient.invalidateQueries({queryKey: ["albums"]});
      queryClient.invalidateQueries({queryKey: ["photos"]});

      toast.success("Album criado com sucesso")
    } catch (error) {
      toast.error("Erro ao criar álbum");
      throw error;
    }
  }

  return {
      createAlbum,
  }
}
