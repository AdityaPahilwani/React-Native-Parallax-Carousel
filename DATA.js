// export const DATA = [
//   {
//     id: 1,
//     uri:
//       "https://www.theindianwire.com/wp-content/uploads/2019/12/red-dead-redemption-2-xbox-one-4k-1-scaled.jpg",
//     title: "Aditya Pahilwani",
//   },
//   {
//     id: 2,
//     uri:
//       "https://cutewallpaper.org/21/arthur-morgan-wallpapers/Arthur-Morgan-Wallpapers-Wallpaper-Cave.jpg",
//     title: "Arthur Morgan",
//   },
//   {
//     id: 3,
//     uri:
//       "https://pixelz.cc/wp-content/uploads/edd/2018/08/shadow-of-the-tomb-raider-lara-croft-e3-uhd-4k-wallpaper.jpg",
//     title: "Lara Croft",
//   },
// ];

const images = [
  "https://cutewallpaper.org/21/arthur-morgan-wallpapers/Arthur-Morgan-Wallpapers-Wallpaper-Cave.jpg",
  "https://www.theindianwire.com/wp-content/uploads/2019/12/red-dead-redemption-2-xbox-one-4k-1-scaled.jpg",
  "https://cdn.wccftech.com/wp-content/uploads/2020/02/49517766152_7ab6037ac1_k.jpg",
  "https://pixelz.cc/wp-content/uploads/edd/2018/08/shadow-of-the-tomb-raider-lara-croft-e3-uhd-4k-wallpaper.jpg",
  "https://i.pinimg.com/564x/54/28/fa/5428faa764350002a9f54e469ed8385e.jpg",
];
export const data = images.map((image, index) => ({
  key: String(index),
  photo_url: image,
  avatar_url: `https://randomuser.me/api/portraits/men/${Math.floor(
    Math.random() * 49
  )}.jpg`,
}));
