export class  StorageService {

    constructor(){}
  
    getApiUrl(){
      return 'https://garciaso-imc-api.herokuapp.com'
      //return   'http://localhost:8080'
      //return   'http://201.147.64.84:8083' 
      
    }

    setSession(key: string, obj: any) {
      sessionStorage.setItem(key, obj)
    }
  
    getSession(key: string) {
      const obj = sessionStorage.getItem(key);
      return obj;
    }
  
    sessionDeleteAll() {
      sessionStorage.clear();
    }
  
    sessionDeleteByKey(key: string) {
      sessionStorage.removeItem(key);
    }
  
    setLocal(key: string, obj: any) {
      localStorage.setItem(key, JSON.stringify(obj));
    }
  
    getLocal(key: string) {
      const obj = localStorage.getItem(key);
      return obj;
    }
  
    localDeleteAll() {
      localStorage.clear();
    }
  
    localDeleteByKey(key: string) {
      localStorage.removeItem(key);
    }
  }