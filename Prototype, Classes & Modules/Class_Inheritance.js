class MediaPlayer {
    constructor(name) {
        this.name = name;
    }

    play() {
        console.log(`${this.name} is playing.`);
    }

    pause() {
        console.log(`${this.name} is paused.`);
    }
}

class MusicPlayer extends MediaPlayer {
    constructor(name, playlist) {
        super(name);
        this.playlist = playlist;
    }

    nextSong() {
        console.log(`${this.name} is playing the next song from ${this.playlist}.`);
    }
}

const player = new MusicPlayer("Joker BGM ", "Chill Mix");
player.play();
player.pause();
player.nextSong();
