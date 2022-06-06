const { useState, useEffect } = require("react")

const useBreakfast = () => {
    const [breakfast, setBreakfast] = useState([])
  
    const lunch = breakfast.filter(i => i.type.includes('lunch')); 
    const dinner = breakfast.filter(i => i.type.includes('dinner'));
    const breackFast = breakfast.filter(i => i.type.includes('breakfast'));

    useEffect(() => {
        fetch("Breakfast.json")
        .then(res => res.json())
        .then(data => setBreakfast(data))
    }, [])

    return [breakfast, setBreakfast, breackFast, lunch, dinner];
}
export default useBreakfast