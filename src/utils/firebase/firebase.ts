import { GalleryCollection } from "@/types";
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

import {addDoc, deleteDoc, collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, startAfter, startAt, updateDoc, where} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwAMIyUK74jA4Of4A9afCTKie706z1Yo",
  authDomain: "gallery-app-b8f5b.firebaseapp.com",
  projectId: "gallery-app-b8f5b",
  storageBucket: "gallery-app-b8f5b.appspot.com",
  messagingSenderId: "925135929416",
  appId: "1:925135929416:web:b4484a086dd29ce974587d"
};

const firebase = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);
export const storage = getStorage();

export const addGallery = async (collectionName: string, data: any) => {
  return await addDoc(collection(getFirestore(), collectionName), data);
}

export const getGalleryCollection = async <T>(collectionName: string) => {
  let datas: any[] = [];
  const docs = await getDocs(query(collection(getFirestore(), collectionName), limit(10)));
  docs.forEach(
      doc => {
          const id = doc.id;
          const data = doc.data();
          datas.push({ 
              id,
              ...data,
          })
      }
  );
  return datas as T[];
}

export const getGalleryById = async <T>(collectionName: string) => {
  const document = getDoc(doc(getFirestore(), collectionName));
  return document.then(
      doc => {
          const id = doc.id;
          const data = doc.data();

          return { 
              id,
              ...data
          };
      }
  )
}

export const updateGallery = async <T>(collectionName: string, data: any) => {
  return await updateDoc(doc(getFirestore(), collectionName), {
      ...data
  })
}

// export const deleteFrame = async (id: string) => {
//   try {
//   const document = doc(db, "Gallery", id);
//   await deleteDoc(document);
//   } catch (err) {
//   console.log(err);
//   }
// }

// export const deleteGalleryElement = async (id: string, e: MouseEvent) => {
//   e.stopPropagation();
//   const docRef = doc(getFirestore(), "Gallery", id);
//   await deleteDoc(docRef)
//   // showAlert('error', `Todo with id ${id} is deleted successfully`)
//   }
// Initialize Firebase
export default firebase;