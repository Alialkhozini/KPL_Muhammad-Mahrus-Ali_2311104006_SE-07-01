class SayaTubeVideo {
    constructor(title) {
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.title = title;
      this.playCount = 0;
    }
  
    increasePlayCount(count) {
      if (count > 0) {
        this.playCount += count;
      }
    }
  
    printVideoDetails() {
      console.log(`ID: ${this.id}`);
      console.log(`Title: ${this.title}`);
      console.log(`Play Count: ${this.playCount}`);
    }
  }
  
  class SayaTubeUser {
    constructor(username) {
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.username = username;
      this.uploadedVideos = [];
    }
  
    addVideo(video) {
      this.uploadedVideos.push(video);
    }
  
    getTotalVideoPlayCount() {
      return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }
  
    printAllVideoPlaycount() {
      console.log(`User: ${this.username}`);
      this.uploadedVideos.forEach((video, index) => {
        console.log(`Video ${index + 1} judul: ${video.title}`);
      });
    }
  }
  
  const user = new SayaTubeUser("Mahrus Ali");
  
  const filmList = [
    "Review Film DareDevil oleh Mahrus Ali",
    "Review Film Loki oleh Mahrus Ali",
    "Review Film Iron Man oleh Mahrus Ali",
    "Review Film Ant-Man oleh Mahrus Ali",
    "Review Film Avenger: Endgame oleh Mahrus Ali",
    "Review Film Joker oleh Mahrus Ali",
    "Review Film IT oleh Mahrus Ali",
    "Review Film Thor oleh Mahrus Ali",
    "Review Film Spider-man oleh Mahrus Ali",
    "Review Film Hulk Away oleh Mahrus Ali",
  ];
  
  filmList.forEach((film) => {
    const video = new SayaTubeVideo(film);
    user.addVideo(video);
    video.increasePlayCount(100);
  });
  
  user.printAllVideoPlaycount();