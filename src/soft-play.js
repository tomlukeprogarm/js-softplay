// do not change these lines
let adults = 0
let children = 0
let totalAdults = 0
let totalChildren = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const total = () => {
  return{adults: totalAdults, children: totalChildren}
}



function enter(numAdults, numChildren){
  if(numAdults < numChildren){
    return false
  }else{
   adults+=numAdults
   children+=numChildren

  totalAdults+=numAdults
  totalChildren+=numChildren
    return true
  }
}


function leave (numAdults, numChildren){
  if(numAdults < numChildren || adults - numAdults < children - numChildren){
    return false
  }else{
    adults -= numAdults
    children -= numChildren
    return true
    }
  }


const occupancy = () => {
  return{adults:adults, children:children}
}


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
