class Api {

   static setItem = (where, data) => {

      window.localStorage.setItem(`storage-${where}`, data);
   }

   static getItem = (where) => {
      return JSON.parse(localStorage.getItem(`storage-${where}`));
   }

   static setCurrentUser = (who) => {
      window.localStorage.setItem(`storage-userCurrent`, JSON.stringify(who));
   }

   static setInAllUsers = (data) => {
      const users = Api.getItem("Allusers");
      console.log(users)

      if (users == null) {

         const array = [];
         array.push(data);

         Api.setItem("Allusers", JSON.stringify(array));

      } else {

         users.push(data)
         Api.setItem("Allusers", JSON.stringify(users));

      }
   }

   static setInAllPlanifications = (data) => {
      const plan = Api.getItem("planifications");

      if (plan == null) {

         const array = [];
         array.push(data);

         Api.setItem("planifications", JSON.stringify(array));

      } else {

         plan.push(data)
         Api.setItem("planifications", JSON.stringify(plan));

      }
   }


}

export default Api;