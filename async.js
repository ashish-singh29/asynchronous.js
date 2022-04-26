
// this is synchronous way of reading files
//console.log('before')


const fs=require('fs')

 //let data =fs.readFileSync('f1.txt')
   //console.log('this is file1- '+data)

 //console.log('after')

// async way of reading files

console.log('Before')

fs.readFile('f1.txt',cb)

function cb(err,data){
    if(err){

       console.log(err)

    }
    else{

        console.log('i am f1 data  '+ data)

    }
}

fs.readFile('f2.txt',cb2)

function cb2(err,data){
  if(err){

     console.log(err)

  }
  else{

      console.log('i am f2 data  '+ data)

  }
}
console.log('After')
 




