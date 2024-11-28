export const buildFooter = () => {
  const main = document.getElementById("main");

  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");
  footer.classList.add("footer");

  const footerHr = document.createElement("hr");
  footer.append(footerHr);

  const footerContent = document.createElement("section");
  footerContent.setAttribute("id", "footerContent");
  footerContent.classList.add("footerContent");
  footer.append(footerContent);

  const footerContentUl1 = document.createElement("ul");
  footerContent.append(footerContentUl1);

  const footerContentLi1 = document.createElement("li");
  footerContentLi1.classList.add("footerContentLi1");
  footerContentUl1.append(footerContentLi1);

  const footerContentLi1A = document.createElement("a");
  footerContentLi1A.setAttribute("id", "footerContentLi1A");

  footerContentLi1A.innerText = "WALLYWOOD";
  footerContentLi1.append(footerContentLi1A);

  const footerContentLi6A = document.createElement("a");
  footerContentLi6A.innerText = "Øster uttrupvej 1, 9000 Aalborg";
  footerContentLi1.append(footerContentLi6A);

  const footerContentLi7A = document.createElement("a");
  footerContentLi7A.innerText = "9000 Allborg";
  footerContentLi1.append(footerContentLi7A);

  const footerContentLi2 = document.createElement("li");
  footerContentLi2.classList.add("footerContentLi2");
  footerContentUl1.append(footerContentLi2);

  const footerContentLi3A = document.createElement("a");
  footerContentLi3A.innerText = "CVR: 12341234";
  footerContentLi2.append(footerContentLi3A);

  const footerContentLi4A = document.createElement("a");
  footerContentLi4A.innerText = "MAIL: info@wallywood.com";
  footerContentLi2.append(footerContentLi4A);

  const footerContentLi5A = document.createElement("a");
  footerContentLi5A.innerText = "MOBIL: 45+ 12345678";
  footerContentLi2.append(footerContentLi5A);
  // right side

  const footerContentDiv = document.createElement("div");
  footerContent.append(footerContentDiv);

  const footerContentImg = document.createElement("img");
  footerContentImg.setAttribute("id", "footerContentImg");
  footerContentImg.src = "./assets/_FILES/Social Media Icons.png";
  footerContentDiv.append(footerContentImg);


  main.append(footer);
};
