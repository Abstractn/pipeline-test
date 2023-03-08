import { TestInterface } from './interfaces.ts';
import { TestCollectionInterface } from './interfaces.ts';


function runTest(itemQuantity: number): TestCollectionInterface {
  let res: TestCollectionInterface = [];
  res.id = 1;
  res.expirationDate = new Date();
  for(let i = 0; i < itemQuantity; i++) {
    const collectionItem: TestInterface = {
      id: i,
      label: `item${i}`
    };
    res.collection.push(collectionItem);
  }
  return res;
}





function init(): void {
  console.log('[INIT]');
  
  const collection: TestCollectionInterface = runTest(5);
  console.log(collection);
}

init();
