const getValidUrl = (url) => {
  if (url.indexOf("http://") === -1 && url.indexOf("https://") === -1) return `//${url}`;
  return url;
};

export { getValidUrl };
