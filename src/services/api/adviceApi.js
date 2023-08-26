const url_api = "https://api.adviceslip.com/advice";

export const getData = async () => {
  const res = await fetch(url_api);
  return res.json();
};
