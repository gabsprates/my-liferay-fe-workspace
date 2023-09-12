import "@testing-library/jest-dom";

Object.defineProperty(global, "Liferay", {
  value: {
    Language: {
      get: (key) => key,
    },
  },
});
