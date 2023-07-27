import { Injectable, OnInit } from "@angular/core";
import {  Firestore, collection, collectionData, doc } from "@angular/fire/firestore";
import { addDoc, deleteDoc, getDoc, getFirestore, query, updateDoc,
  where ,getDocs, CollectionReference, DocumentData, getDocFromServer,
  onSnapshot, runTransaction, orderBy, limit, startAfter, startAt, getCountFromServer, setDoc} from "firebase/firestore";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { IlandlordProp } from "../models/landlord";
import { initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";


@Injectable({ providedIn:'root'})
export class db implements OnInit{
  constructor(private fdb:Firestore){}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  /** ---------------------------------- */
  firebaseConfig = {
    apiKey: "AIzaSyAOsw9i6F61js3aCbwPj5rsEFnApjQnlEQ",
    authDomain: "estateagent-2da55.firebaseapp.com",
    projectId: "estateagent-2da55",
    storageBucket: "estateagent-2da55.appspot.com",
    messagingSenderId: "791145182474",
    appId: "1:791145182474:web:9dc937800c64e7ed2036f3",
    measurementId: "G-F0XSWR6LGP"
  };
  app = initializeApp(this.firebaseConfig);
  dbs = getFirestore(this.app);
  /** ---------------------------------- */

  async addData(newData:any, dbName:string){

    const col = collection(this.fdb, dbName);
    const countDb = await getCountFromServer(col);
    let id = countDb.data().count + 1;
    const data = doc(collection(this.fdb,'id')).id;

    newData.Id = data;
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

    this

    return snap;
  }

  async getData(dbName:string){

    let c:any;
    c = await collection(this.fdb,dbName);
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

  async addFieldData(){

    /** to add data in test document and the doc id is LA */
    /*
    await setDoc(doc(this.dbs, 'test','TEST_1'),{
      name:'mohammed alfadhel',
      state:'CA',
      country:'USA'
    });*/

    /** with adding {merage: true}, we can add data to the fs data documdent */
    /*
    const newData = await doc(this.dbs, 'test', 'BJ');
    await setDoc(newData, {
      name:'mohammed alfadhel',
      state:'CA',
      country:'USA'
    },{ merge: true});
    */

    /** other way to adding data with auto id and call doc id. */
    /*
   const docRef = await addDoc(collection(this.dbs, 'test'),{
    name:'mohammed',
    job:'account'
   });
    console.log(docRef.id);*/

    /** */
    //console.log('data is added!');
  }

  async storageData(filePath:any, file:any){

    const storage = getStorage(this.app);
    const storageRef = ref(storage,filePath);
    await uploadBytes(storageRef, file).then(res => alert('File is uploaded.'));
  }

  async getStorageData(filePath){
    const storage = getStorage(this.app);
    const storageRef = ref(storage, filePath)
    return await getDownloadURL(storageRef);
  }

  async deleteStorageData(image:string){
    const storage = getStorage(this.app);
    const storageRef = ref(storage, image);
    await deleteObject(storageRef)
    .then(() => alert('The item is deleted.'))
    .catch(err => alert(err));
  }



}
