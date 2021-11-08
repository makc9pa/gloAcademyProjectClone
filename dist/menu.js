/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTs7QUFFbEMseURBQUk7QUFDSiwwREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2FjYWRlbXlwcm9qZWN0Y2xvbmUvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aFwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XG5cbmF1dGgoKVxubWVudSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\n    const buttonAuth = document.querySelector('.button-auth')\n    const modalAuth = document.querySelector('.modal-auth')\n    const buttonOut = document.querySelector('.button-out')\n    const userName = document.querySelector('.user-name')\n    const closeAuth = document.querySelector('.close-auth')\n    const logInForm = document.getElementById('logInForm')\n    const inputLogin = document.getElementById('login')\n    const inputPassword = document.getElementById('password')\n\n\n    const login = (user) => {\n        buttonAuth.style.display = 'none'\n\n        buttonOut.style.display = 'flex'\n        userName.style.display = 'flex'\n\n        userName.textContent = user.login\n        modalAuth.style.display = 'none'\n    }\n\n    const logOut = () => {\n        buttonAuth.style.display = 'flex'\n\n        buttonOut.style.display = 'none'\n        userName.style.display = 'none'\n\n        localStorage.removeItem('user')\n    }\n\n    buttonAuth.addEventListener('click', () => {\n        modalAuth.style.display = 'flex'\n    })\n\n    closeAuth.addEventListener('click', () => {\n        modalAuth.style.display = 'none'\n    })\n\n    buttonOut.addEventListener('click', () => {\n        logOut()\n    })\n\n    logInForm.addEventListener('submit', (event) => {\n        event.preventDefault()\n        if (inputLogin.value.trim() !== \"\") {\n            const user = {\n                login: inputLogin.value.replace(/\\s+/g, ''),\n                password: inputPassword.value\n            }\n            localStorage.setItem('user', JSON.stringify(user))\n            login(user)\n        } else {\n            alert(\"Введите логин пользователя\")\n        }\n    })\n\n    if (localStorage.getItem('user')) {\n        login(JSON.parse(localStorage.getItem('user')))\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYWNhZGVteXByb2plY3RjbG9uZS8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKVxuICAgIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJylcbiAgICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW91dCcpXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJylcbiAgICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpXG4gICAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0luRm9ybScpXG4gICAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpXG4gICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpXG5cblxuICAgIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcbiAgICAgICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAgICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpblxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICAgICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG5cbiAgICAgICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcbiAgICB9XG5cbiAgICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIH0pXG5cbiAgICBjbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfSlcblxuICAgIGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9nT3V0KClcbiAgICB9KVxuXG4gICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmIChpbnB1dExvZ2luLnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgICAgICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICAgICAgICAgIGxvZ2luKHVzZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcItCS0LLQtdC00LjRgtC1INC70L7Qs9C40L0g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst cardsMenu = document.querySelector('.cards-menu')\n\nconst changeTitle = (restaurant) => {\n    const restaurantTitle = document.querySelector('.restaurant-title')\n    restaurantTitle.textContent = restaurant.name\n}\n\nconst changeRating = (restaurant) => {\n    const restaurantRating = document.querySelector('.rating')\n    restaurantRating.textContent = restaurant.stars\n}\n\nconst changePrice = (restaurant) => {\n    const restaurantPrice = document.querySelector('.price')\n    restaurantPrice.textContent = restaurant.price\n}\n\nconst changeCategory = (restaurant) => {\n    const restaurantCategory = document.querySelector('.category')\n    restaurantCategory.textContent = restaurant.kitchen\n}\n\nconst menu = () => {\n\n    const renderItems = (data) => {\n        data.forEach(({ description, id, image, name, price }) => {\n            const card = document.createElement('div')\n\n            card.classList.add('card')\n            card.innerHTML = `\n                <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\n                <div class=\"card-text\">\n                    <div class=\"card-heading\">\n                        <h3 class=\"card-title card-title-reg\">${name}</h3>\n                    </div>\n                    <div class=\"card-info\">\n                        <div class=\"ingredients\">\n                        ${description}\n                        </div>\n                    </div>\n                    <div class=\"card-buttons\">\n                        <button class=\"button button-primary button-add-cart\">\n                            <span class=\"button-card-text\">В корзину</span>\n                            <span class=\"button-cart-svg\"></span>\n                        </button>\n                        <strong class=\"card-price-bold\">${price} ₽</strong>\n                    </div>\n                </div>\n            `\n            cardsMenu.append(card)\n        });\n    }\n    if (localStorage.getItem('restaurant')) {\n        const restaurant = JSON.parse(localStorage.getItem('restaurant'))\n\n        changeTitle(restaurant)\n        changeRating(restaurant)\n        changePrice(restaurant)\n        changeCategory(restaurant)\n\n        fetch(`./db/${restaurant.products}`)\n            .then((response) => response.json())\n            .then((data) => {\n                renderItems(data);\n            })\n            .catch((error) => {\n                console.log(error);\n            })\n    } else {\n        window.location.href = '/'\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IscUNBQXFDO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxTQUFTLEtBQUs7QUFDaEQ7QUFDQTtBQUNBLGdFQUFnRSxLQUFLO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxPQUFPO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9hY2FkZW15cHJvamVjdGNsb25lLy4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY2FyZHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLW1lbnUnKVxuXG5jb25zdCBjaGFuZ2VUaXRsZSA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnQtdGl0bGUnKVxuICAgIHJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQubmFtZVxufVxuXG5jb25zdCBjaGFuZ2VSYXRpbmcgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IHJlc3RhdXJhbnRSYXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF0aW5nJylcbiAgICByZXN0YXVyYW50UmF0aW5nLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5zdGFyc1xufVxuXG5jb25zdCBjaGFuZ2VQcmljZSA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgcmVzdGF1cmFudFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlJylcbiAgICByZXN0YXVyYW50UHJpY2UudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LnByaWNlXG59XG5cbmNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCByZXN0YXVyYW50Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnknKVxuICAgIHJlc3RhdXJhbnRDYXRlZ29yeS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQua2l0Y2hlblxufVxuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhLmZvckVhY2goKHsgZGVzY3JpcHRpb24sIGlkLCBpbWFnZSwgbmFtZSwgcHJpY2UgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwiJHtuYW1lfVwiIGNsYXNzPVwiY2FyZC1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtcmVnXCI+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLWFkZC1jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FyZC10ZXh0XCI+0JIg0LrQvtGA0LfQuNC90YM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJjYXJkLXByaWNlLWJvbGRcIj4ke3ByaWNlfSDigr08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICBjYXJkc01lbnUuYXBwZW5kKGNhcmQpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3RhdXJhbnQnKSkge1xuICAgICAgICBjb25zdCByZXN0YXVyYW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKVxuXG4gICAgICAgIGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpXG4gICAgICAgIGNoYW5nZVJhdGluZyhyZXN0YXVyYW50KVxuICAgICAgICBjaGFuZ2VQcmljZShyZXN0YXVyYW50KVxuICAgICAgICBjaGFuZ2VDYXRlZ29yeShyZXN0YXVyYW50KVxuXG4gICAgICAgIGZldGNoKGAuL2RiLyR7cmVzdGF1cmFudC5wcm9kdWN0c31gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;