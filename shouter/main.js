function shouter(whatToShout) {
  let str = whatToShout.toUpperCase()+'!!!';
  return str;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testShouter() {
  const whatToShout = 'fee figh foe fum';
  const expected = 'FEE FIGH FOE FUM!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: `shouter` is working');
  } else {
    console.log('FAILURE: `shouter` is not working');
  }
}

testShouter();
