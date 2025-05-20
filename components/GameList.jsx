// ... existing code ...
<div className={styles.thumbnailWrapper}>
  <Image
    src={game.thumbnail}
    alt={game.title}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className={styles.thumbnailImage}
    priority={index < 3}
  />
</div>
// ... existing code ...