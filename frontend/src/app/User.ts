export class User {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public login: string,
    // todo change type to enum
    public password: string,
    public email: string,
    public sex: string,
    // todo probably we don't need to save confirmPassword
    // public confirmPassword: string,
  ) {
  }
}


/*
Name: characters only, max number - 20
Surname: chars only , 20 max
Login: can contain chars and numerics, from 6 to 16 characters
Email adress:  idk stuff for email adress
Password: chars, has to contain number(s), from 6 to 20 length
Confirm password: has to be the same as field password
*/
