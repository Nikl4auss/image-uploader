export function imageValidator(file: File) {
  const validImageTypes = ['image/jpeg', 'image/png', 'image/svg+xml']
  return validImageTypes.includes(file.type)
}
