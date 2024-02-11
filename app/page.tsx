import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  // ipfs url of the image
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmc3xei83saP6Uq3ufkCVPPe3ZCjafTFt9EwjJQnFaRsKs/golfball.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'GOFL Scorecard',
  description: 'A frame for tracking your golf score',
  openGraph: {
    title: 'GOFL Scorecard',
    description: 'A frame for tracking your golf score',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmc3xei83saP6Uq3ufkCVPPe3ZCjafTFt9EwjJQnFaRsKs/golfball.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>GOFL Scorecard</h1>
    </>
  );
}