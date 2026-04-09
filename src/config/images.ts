/**
 * Centralized image configuration
 * All image imports and their metadata in one place
 */

// Artist & Background Images
import artistPortrait from "@/assets/artist-portrait.jpg";
import artistPortraitLowres from "@/assets/artist-portrait-lowres.png";
import heroArtwork from "@/assets/hero-artwork.jpg";

// Section Images
import profileImage from "@/assets/profile-section.jpg";
import artInterestImage from "@/assets/art-interest-section.jpg";
import teachingImage from "@/assets/teaching-section.jpg";
import travellingArtistImage from "@/assets/travelling-artist-section-new.jpg";
import travellingArtistOldImage from "@/assets/travelling-artist-section.jpg";
import exhibitionsImage from "@/assets/exhibitions-section.jpg";

// Artwork Images
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

// Iceland Residency Images
import icelandWatercolor from "@/assets/iceland-watercolor.jpg";
import icelandMountain from "@/assets/iceland-mountain.jpg";
import icelandFriendsSnow from "@/assets/iceland-friends-snow.jpg";
import icelandSelfie from "@/assets/iceland-selfie.jpg";
import icelandColorfulFish from "@/assets/iceland-colorful-fish.jpg";
import icelandFlyingTime from "@/assets/iceland-flying-time.jpg";
import icelandPaintingDetail from "@/assets/iceland-painting-detail.jpg";
import icelandOceanWave from "@/assets/iceland-ocean-wave.jpg";
import icelandWindowCrochet from "@/assets/iceland-window-crochet.jpg";
import icelandPurpleWatercolor from "@/assets/iceland-purple-watercolor.jpg";
import icelandKitchenCrochet from "@/assets/iceland-kitchen-crochet.jpg";
import icelandBusStop from "@/assets/iceland-bus-stop.jpg";
import icelandStudioWorkspace from "@/assets/iceland-studio-workspace.jpg";
import icelandGroupPhoto from "@/assets/iceland-group-photo.jpg";
import icelandFlyingTimeWall from "@/assets/iceland-flying-time-wall.jpg";
import icelandCrochetCloseup from "@/assets/iceland-crochet-closeup.jpg";
import icelandRedWindow from "@/assets/iceland-red-window.jpg";
import icelandSnowWalk from "@/assets/iceland-snow-walk.jpg";
import icelandPeaceMountains from "@/assets/iceland-peace-mountains.jpg";
import icelandUmbrellaBusstop from "@/assets/iceland-umbrella-busstop.jpg";

// Press/Exhibition Images
import retrospektivaCover from "@/assets/retrospektiva-cover.jpg";
import retrospektivaSecond from "@/assets/retrospektiva-second.jpg";
import bienaleCover from "@/assets/bienale-cover.jpg";
import bienaleSecond from "@/assets/bienale-second.jpg";

// Export individual images
export const images = {
  artistPortrait,
  artistPortraitLowres,
  heroArtwork,
  profile: profileImage,
  artInterest: artInterestImage,
  teaching: teachingImage,
  travellingArtist: travellingArtistImage,
  exhibitions: exhibitionsImage,
  artworks: [artwork1, artwork2, artwork3, artwork4, artwork5, artwork6],
  retrospektiva: { cover: retrospektivaCover, second: retrospektivaSecond },
  bienale: { cover: bienaleCover, second: bienaleSecond },
  iceland: {
    residency1: [icelandFriendsSnow, icelandOceanWave, artwork1, artwork4],
    residency2: [icelandSelfie, icelandBusStop, icelandWatercolor, icelandPurpleWatercolor, icelandStudioWorkspace, travellingArtistOldImage, icelandUmbrellaBusstop],
    residency3: [icelandGroupPhoto, icelandFlyingTime, icelandPaintingDetail, icelandFlyingTimeWall, icelandColorfulFish, icelandWindowCrochet, icelandKitchenCrochet, icelandCrochetCloseup, icelandRedWindow, icelandMountain, icelandSnowWalk, icelandPeaceMountains],
  },
} as const;

// Section images map for tab navigation
export const sectionImages = {
  profile: profileImage,
  art: artInterestImage,
  teaching: teachingImage,
  travelling: travellingArtistImage,
  exhibitions: exhibitionsImage,
} as const;

export type SectionKey = keyof typeof sectionImages;
