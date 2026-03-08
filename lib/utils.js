// Helper para obtener la ruta correcta de los assets en producción
export const getAssetPath = (path) => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/verdesapiens-frontend-user" : "";
  return `${basePath}${path}`;
};
