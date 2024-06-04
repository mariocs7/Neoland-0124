export const Image = ({ src, alt, width, height }) => {
  return (
    <figure>
        {src}
        {alt}
        {width}
        {height}
    </figure>
  )
}
