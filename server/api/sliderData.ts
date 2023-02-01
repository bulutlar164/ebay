import {getFirestore} from "firebase-admin/firestore"
import {initializeApp,getApps,cert} from "firebase-admin/app"
import ProductsDizi from "~~/interfaces/ProductsDizi";

const apps = getApps();

if(!apps.length){
    initializeApp({
       credential:cert('./nuxt3-firebase-ebay-firebase-adminsdk-95nrh-18af94bc6d.json')
    })
}

export default async() =>{
    const db = getFirestore();
    console.log("db:",db);
    const productsSnap = await db.collection('SliderData').get();
    console.log("productsSnap :",productsSnap)
    let productsData = new Array<ProductsDizi>();
     productsData = productsSnap.docs.map(doc =>{
        return{
            uuid:doc.id,
            ...doc.data()
        }
    })
    console.log("productsData",productsData);
    return productsData;
}
