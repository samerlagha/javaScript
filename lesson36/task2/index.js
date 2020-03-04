import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData } from "./user.js";
import { renderRepos, clearRepoList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: ""
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");


//search by name
const onSearchUser = async () => {
  showSpinner();
  clearRepoList();
  const userName = userNameInputElem.value;
  try {

    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }

  // fetchUserData(userName) //запрос даних користувача
  //   .then(userData => {
  //     //prishli danni
  //     renderUserData(userData); //відмалювали
  //     return userData.repos_url; //передаєм дані наст обробнику
  //   })
  //   .then(url => fetchRepositories(url)) // запрос за списком
  //   .then(reposList => {
  //     renderRepos(reposList); //відмальов список
  //   })
  //   .catch(err => {
  //       alert(err.message);
  //   })
  //   .finally(() => {
  //       hideSpinner();

  //   })
};

showUserBtnElem.addEventListener("click", onSearchUser);