/**
 * 1. authentication, authorization
 * 2. login === sign in
 * 3. register === sign up
 */

// emaail password project setup with firebase:
// firebase theke new project create korte hobe. than authintication theke email-password sign-in-method sellect korte hobe.
// than Project overview > project setting > web > project er nam dia form fillup korle:  akta code diba. 1st firebase install kore nita hobe npm dia. than oi code ta firebase.config.js file a paste korte hobe. ar ai codeta secrete rakhte hobe.
// docs > builds > authintication > web > import { getAuth } from "firebase/auth"; and const auth = getAuth (app); import korte hobe jei component a use korbo sei component a . ar firebase.config.js file theke app k exporte kore dita hobe. But jei jei file a getAuth use korbo every file a getAuth k import korte hobe. So firebase.config.js file a app k export na kore getAuth k importe kore auth = getAuth (app); ai auth k exporte kore dilai hobe.
// web > password awthentication > jei component theke user er email and password nibo sei component a import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; import kore nita hobe. Than call korear somoi 3ta perameter dita hoi. oi firebase.config.js file thekke exporte kora auth, user er email and password. createUserWithEmailAndPassword(auth, email, password);  call korar pore akta responce pabo. sei responce k .then() and .catch(error) er maddhome dhorte hobe.

// akhon user er register form a kono error khale ta UI te dekhanor jonno upore akta useState a error message ta store korte hobe. responce pawer por .catch(err) theke. Than conditionally error message k UI te show korabo. abar form fillup korar somoi error take reset kore empty kore dita hobe. Otherwise error ta thakei jabe. Akivabe successfully register hole message show korate pari. ba modal o show kora jabe.

// firebase by default password er error diba jodi password 6 charecter er besi na hoi. But amra chassi data submit kore firebase er server a hitt kore ai error message ta na nia ,, amra custom vabe input field theke password nia length check kore error message return kore dita pari.



// Pasword validation with regular expretion:
// /[A-Z]/.test('imran') ; Output: false
// /[A-Z]/.test('Imran') ; Output: true
// aikhane forword slash er moddhe jei condition dibo ta test("string") test er moddher string er sate match korle output true hoi. Ex:
// else if(!/[A-Z]/.test(password)){
//     return setRegisterError('Password should have at least one upper case characters.')
// }



// Pasword show and hide korar system holo: password input field er type password na hoia text hole input field er text gulo dekha jai. So  useState er maddhome conditionaly password input field er type change kora pabo. kono button ba eye icon a click korar maddhome state er value change hoia input field er type tao change korbo.. Akivabe eye icon kew conditionaly state er upor vitti kore change korbo.


// Login form: user login korar jonno register er motoi same way: signInWithEmailAndPassword(auth, email, password) ai method use korte hobe.




// Password forget 
// Password forget korar jonno firebase > docs > build > authentication > web > manage users > Send a password reset email > import kore use korte hobe : sendPasswordResetEmail(auth, email); aikhane jeheto onSubmit a email field theke email k nibona. tai useRef() er maddhome email field theke email k case korte hobe. Than call korte hobe email and auth dia. Input field er emai dia acount create kore thakle oi email a verification code jabe.



// Register korar somoi dewa emai valid kina ta check:
// Account create korar somoi user er dewa email right kina ta check korar jonn registation form a createUserWithEmailAndPassword er pore than er moddhe varified korte hobe. verified korar jonno password forget er motoi manage users > Send a user a verification email > theke sendEmailVerification(auth.currentUser) nia import korte hobe. aikhane perameter a curent jei user thakbe sei user k dita hobe (result.user) dia. Than email verification code er maddhome verification korle result.user.emailVerified er value true hobe. Otherwise false thakbe. So login korar somoi result.user.emailVerified er value true hole UI te login successfull message show korabo.




// Update user Profile:
// User Profile update korar jonno Manage Users > Update a user's profile > theke ai function k nia import kore call korte hobe. updateProfile(auth.currentUser, {displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"}); ai method use kora hoi user 1st time registaion korar somoi createUserWithEmailAndPassword() er than er moddhe.
// User login korle than er moddhe result > user er moddhe displayName and photoURL property er value thakena. Oi value gulo register korar somoi user er theke nia updateProfile() ai method er maddhome pathia dila login korar somoi oi user er displayName and photoURL ta pawa jabe.