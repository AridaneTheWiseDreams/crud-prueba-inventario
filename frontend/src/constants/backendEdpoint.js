export const backendEdpoint = import.meta.env.VITE_BACKEND_URL;

export const backendProductEnpoint = `${backendEdpoint}/api/products`;

export const backendAuthEnpoint = `${backendEdpoint}/api/users`;

export const backendUserProductEnpoint = `${backendEdpoint}/api/users-products`;
