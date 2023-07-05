import { Injectable, OnInit } from "@angular/core";
import {  Firestore, collection, collectionData, doc } from "@angular/fire/firestore";
import { addDoc, deleteDoc, getDoc, getFirestore, query, updateDoc,
  where ,getDocs, CollectionReference, DocumentData, getDocFromServer,
  onSnapshot, runTransaction, orderBy, limit, startAfter, startAt, getCountFromServer} from "firebase/firestore";
import { IlandlordProp } from "../models/landlord";

@Injectable({ providedIn:'root'})
export class db implements OnInit{
  constructor(private fdb:Firestore){}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  async addData(newData:any, dbName:string){

    const col = collection(this.fdb, dbName);
    const countDb = await getCountFromServer(col);
    let id = countDb.data().count + 1;
    const data = doc(collection(this.fdb,'id')).id;

    newData.landlordId = data;
    newData.id = id;
    //newLandlord.landlordPath = landlordPath;

    return addDoc(collection(this.fdb,dbName), newData);
  }

  async deleteData(deleteData:any, dbName:string){
    let docId:string;
    //getFirestore();
    let c = collection(this.fdb,dbName);

    let qureyData = query(c, where("landlordId","==",deleteData.landlordId));
    const snap = onSnapshot(qureyData, snap=>{
      snap.docs.forEach(element =>{
      docId = element.id;
      });

      if(docId === null){
        alert('this document is not exist.');
      }else{
        deleteDoc(doc(this.fdb,dbName, docId))
        .then(res =>{
          //console.log(res);
          //this.ngOnInit();
        })
        .catch(err => console.log(err));
      }
    });

    return snap;
  }

  async getData(dbName:string){
    let c = await collection(this.fdb,dbName);
    const qry = query(
      c, orderBy('id', 'asc')
    );

    return await getDocs(qry);
  }

  async updateData(updateData:any, newData:any, dbName:string){
    let id = updateData.id;
    let c = collection(this.fdb, dbName);
    let qry = await query(c, where("id","==",id));
    console.log('next step ...');
    onSnapshot(qry, (res)=>{
      let docId = '';
      res.docs.forEach(ele =>{
        docId = ele.id;
      });

      let selectedDoc = doc(this.fdb,dbName,docId);
      return updateDoc(selectedDoc, newData);
    });


  }

}
