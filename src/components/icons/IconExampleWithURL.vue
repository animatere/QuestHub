<template>
  <div>
    <!-- Vorheriges Icon oder SVG entfernen und das Bild hinzufügen -->
    <img
      :src="imageURL"
      alt="Bunte LED Shisha Lichter"
      width="100"
      height="100"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Place your url here -> better save it on the server instead of loading it from internet
      imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S94e6b3a03fda44a79deb778fc6da6e9dt/WIR-PUFF-Bunte-LED-Shisha-Shisha-Lichter-Zeigen-Ring-Lampe-Magnet-Viskose-Zwei-Arten-mit-Fernbedienung.jpg_640x640Q90.jpg_.webp"
    };
  }
};
</script>
