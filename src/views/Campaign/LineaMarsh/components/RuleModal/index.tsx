import React from 'react';

interface RuleModalProps {
  show: boolean;
  onClose: () => void;
}

const RuleModal: React.FC<RuleModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-[10px]">
      <div
        className="relative w-[808px] h-[727px] bg-no-repeat bg-center z-[1]"
        style={{
          backgroundImage: "url('/svg/campaign/linea-marsh/rule-bg.svg')",
          backgroundSize: 'cover'
        }}
      >
        <button className="absolute -top-2 -right-2 z-[12]">
          <img
            onClick={onClose}
            src="/svg/campaign/linea-marsh/close.svg"
            className="w-[30px] h-[30px] hover:cursor-pointer"
            alt=""
          />
        </button>
        <div className="relative z-10 w-full h-full px-[30px] pt-[33px] font-Jersey">
          <img src="/images/campaign/linea-marsh/croak.png" className="w-[530px] h-[36px] mx-auto" alt="" />
          {/* Modal Content */}
          <h1 className="text-black font-Jersey text-[26px] font-normal leading-[26px] uppercase">
            Get ready to leap into the most exciting trading showdown of the season! Here's what's at stake:
          </h1>
          <div className="">
            <div>
              <h2 className="font-Jersey text-[26px] font-normal uppercase">⏳Timeline:</h2>
              <p className="text-black text-[26px] leading-[1]">- 12.17.2024 - 01.14.2025 (13:00 UTC)</p>
            </div>
            <div>
              <h2 className="font-Jersey text-[26px] font-normal uppercase mt-[30px]">💰Rewards:</h2>
              <p className="text-black text-[26px] leading-[1]">
                - $5,000+ in tokens ($CROAK, $ACX, $oLYNX) split among the top 100, proportional to your trading volume.
                Trade big to win big!
                <br />- Additionally: Top 5 snag Froglets, and the #1 spot earns a rare eFrog NFT.
              </p>
            </div>
            <div>
              <h2 className="font-Jersey text-[26px] font-normal uppercase mt-[30px]">⚡️ Boost:</h2>
              <p className="text-black text-[26px] leading-[1]">
                - Got a Froglet or eFrog NFT? Enjoy a 1.2x wagmi boost on the house to level the playing field against
                whales.
              </p>
            </div>
            <div>
              <h2 className="font-Jersey text-[26px] font-normal uppercase mt-[30px]">⚠️ Remember:</h2>
              <p className="text-black text-[26px] leading-[1]">
                - Hopping onto the leaderboard isn't enough—your share of the prize pool depends on your total volume
                traded once the campaign ends. Out-trade the competition to maximize your rewards!
              </p>
            </div>
            <div className="flex items-center space-x-[20px] text-[26px] leading-[1] mt-[30px]">
              <div>🌉 Bridge.</div>
              <div>🔄 Swap.</div>
              <div>👑 Top the leaderboard.</div>
            </div>
            <p className="text-black font-Jersey text-[26px] font-normal uppercase">Let the Madness begin!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleModal;
