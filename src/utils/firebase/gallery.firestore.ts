import { GalleryCollection } from "@/types";
import { addGallery, getGalleryById, getGalleryCollection, updateGallery } from "../firebase/firebase";

export const getAllGallery = async () => {
    return await getGalleryCollection<GalleryCollection>('Gallery');
};

export const getGallerie = (id: string) => getGalleryById<GalleryCollection>(`Gallery/${id}`);

export const addGallerie = (gallery: GalleryCollection) => addGallery('Gallery', gallery);



export const UpdateTask = (gallery: GalleryCollection) => updateGallery(`Gallery/${gallery.userImage.userImageId}`, gallery);