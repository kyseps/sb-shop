
import CallOfdutyAds from "./CallOfdutyAds"
import DiscordAds from "./DiscordAds"
import PlayStationGiftCardAds from "./PlayStationGiftCardAds"
import TwitchAds from "./TwitchAds"


// justify-content: center;
// align-items: center;

function AdsBoxes() {
  return (
    <div className='flex flex-row items-center justify-center gap-4 m-6'>

      {/* LEFT SIDE */}
      <div className='flex flex-col gap-4'>
      <CallOfdutyAds/>
        <div className='flex flex-row gap-4'>
        <PlayStationGiftCardAds/>
        <TwitchAds/>
        </div>
      </div>


      {/* RIGHT SIDE */}
      <DiscordAds/>

    </div>
  )
}

export default AdsBoxes