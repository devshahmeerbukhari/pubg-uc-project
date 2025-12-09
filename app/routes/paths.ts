// routes/paths.ts
export const paths = {
  partner: {
    add: "/add-partner",
    details: (id: string) => `/add-partner/${id}`,
  },
  ucPackages: {
    root: "/uc-packages",
    details: (id: string) => `/uc-packages/${id}`,
  },
};
