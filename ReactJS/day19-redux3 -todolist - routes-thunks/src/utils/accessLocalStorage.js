export const saveData = (key,value)=>{
  return  localStorage.setItem(key,JSON.stringify(value));
}

export const loadData = (key)=>JSON.parse(localStorage.getItem(key));