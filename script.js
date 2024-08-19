
onload = () => {
  const load = document.getElementById('load')
  const c = setTimeout(() => {
    load.classList.remove("not-loaded");
    clearTimeout(c);
  }, 10000);
};
