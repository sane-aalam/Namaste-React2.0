  console.log("body called 1")
  
  useEffect(() =>{
    console.log("useEffect is called!")
  },[])

  console.log("body called 2")


// solutions: [flow of working react-useEffect Hook]
// After the body render, useEffect hook will called 
// body called 1
// body called 2
// useeffect is called