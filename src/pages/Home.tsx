import "css/Home.css";
import preview from "png/home_1.png";
import creator from "png/creator-home.png";
import instant from "svg/instant-price.svg";

export const Home = () => {
  const first_block = (
    <div className='block first-block'>
      <img className='first-preview-image' src={preview} alt='preview' />

      <div className='preview-card'>
        <div className='preview-card-title'>
          <div className='preview-title'>the creator network®</div>

          <div className='preview-details'>
            <div className='details'>
              <img className='field-logo' src={creator} alt='creator' />
              <div className='detail-fields'>
                <div className='detail-field gray'>Creator</div>
                <div className='detail-field'>Enrico Cole</div>
              </div>
            </div>

            <div className='details'>
              <img className='field-logo' src={instant} alt='creator' />
              <div className='detail-fields'>
                <div className='detail-field gray'>Instant price</div>
                <div className='detail-field'>3.5 ETH</div>
              </div>
            </div>
          </div>
        </div>

        <div className='current-bid'>
          <div className='bid'>
            <div className='bid-title'>Current Bid</div>
            <div className='bid-price'>1.00 ETH</div>
            <div className='bid-footer'>$3,618.36</div>
          </div>

          <div className='auction'>
            <div className='auction-title'>Auction ending in</div>
            <div className='auction-time'>
              <div className='auction-hrs'>
                <div className='time-title'>19</div>
                <div className='time-footer'>Hrs</div>
              </div>

              <div className='auction-mins'>
                <div className='time-title'>24</div>
                <div className='time-footer'>mins</div>
              </div>

              <div className='auction-secs'>
                <div className='time-title'>19</div>
                <div className='time-footer'>secs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='content-plate'>
      <div className='content-title'>
        <div className='content'>
          <div className='title gray'>
            create, explore, & collect digital art nfts.
          </div>
          <div className='label'>The new creative economy.</div>
          <div className='action-button'>Start your search</div>
        </div>
      </div>
      {first_block}
    </div>
  );
};
