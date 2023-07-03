import { Injectable } from "@angular/core";
import {  Firestore, collection, collectionData, doc } from "@angular/fire/firestore";
import { addDoc, deleteDoc, getDoc, getFirestore, query, updateDoc,
  where ,getDocs, CollectionReference, DocumentData, getDocFromServer,
  onSnapshot, runTransaction, orderBy, limit, startAfter, startAt, getCountFromServer} from "firebase/firestore";
import { IlandlordProp } from "../models/landlord";

@Injectable({ providedIn:'root'})
export class db{
  constructor(private fdb:Firestore){}

  async addLandlord(newLandlord:any){
    const col = collection(this.fdb, 'landlordDb');
    const countLandlord = await getCountFromServer(col);
    let id = countLandlord.data().count + 1;
    const landlordData = doc(collection(this.fdb,'id')).id;

    newLandlord.landlordId = landlordData;
    newLandlord.id = id;
    //newLandlord.landlordPath = landlordPath;

    return addDoc(collection(this.fdb,'landlordDb'), newLandlord);
  }

}
