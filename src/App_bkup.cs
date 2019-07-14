/* .App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */

body {
  font-family: "Open Sans", sans-serif;
  background-color: #fff;
}

header {
  color: #fff;
  background-color: #103d5d;
  padding: 33px 0 25px 15px;
}

header h1 {
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.3px;
  display: inline-block;
  margin: 0;
  vertical-align: middle;
}

.fa {
  font-size: 22px;
  transform: translateY(50deg);
}

header i {
  vertical-align: middle;
  margin-left: 12px;
}

.container {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 30px;
}

.wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.add-item {
  border-radius: 2px;
  border-top: 3px solid #103d5d;
  margin-right: 50px;
  background-color: rgb(237, 237, 237);
  padding: 60px 18px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 34px;
  width: 25%;
  margin-right: auto;
}

.display-item {
  width: 65%;
  margin-left: 50px;
}

.display-item button {
  margin-top: 20px;
  margin-left: auto;
  display: block;
}

.add-item form {
  width: 100%;
  overflow: hidden;
}

input {
  font-size: 22px;
  color: #000;
  padding: 18px 22px;
  font-size: 16px;
  margin-bottom: 17px;
  border: 0;
  display: block;
  width: 100%;
}

.menu ul {
  background-color: rgb(5, 75, 122);
  margin: 0;
}

.menu li {
  font-family: sans-serif;
  font-size: 1.2em;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid rgb(255, 255, 255);
}
.menu a {
  text-decoration: none;
  color: rgb(251, 25, 255);
  display: block;
}

ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

li {
  width: calc(50% - 50px);
  list-style-type: none;
  margin-right: 50px;
  background-color: rgb(237, 237, 237);
  color: #000;
  margin-bottom: 30px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
}

h2 {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

li h3 {
  background-color: #103d5d;
  margin: 0;
  color: #fff;
  font-weight: 300;
  padding: 15px;
}

li p {
  padding: 15px;
}

form button {
  width: 100%;
  margin-top: 10px;
}

button {
  border-radius: 2px;
  min-width: 88px;
  background-color: #fa6900;
  cursor: pointer;
  border: 0;
  min-width: 120px;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  padding: 10px 6px;
}
